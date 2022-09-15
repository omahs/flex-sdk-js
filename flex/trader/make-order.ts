import { Flex, MakeOrderMode } from "../exchange";
import { ProcessingErrorCode, TvmErrorCode } from "@eversdk/core";
import {
    XchgPairAccount,
} from "../../contracts";
import {
    getWallet,
} from "./internals";
import { TraderOptions } from "./types";
import { toUnits, Evr } from "../web3";
import { priceToUnits } from "../flex";

export type MakeOrderOptions = {
    clientAddress: string;
    trader: TraderOptions,
    marketAddress: string,
    /** Trade direction */
    sell: boolean,
    /** Amount of Major token to buy or sell */
    amount: number,
    /** Price of Major token */
    price: number,
    /**
     * Optional uint64 size number, MUST be unique for each Trader's order.
     * If omitted library uses random generator.
     */
    orderId?: number | string,
    /** Amount of native currency attached for processing fees */
    evers?: bigint | number | string,
    /** Order expiration time */
    finishTime?: number;
    /** Order type */
    mode?: MakeOrderMode,
};

export type NewOrderInfo = {
    /**
     * uint64 hex string(0x prefixed) with Order ID.
     * If omitted in makeOrder parameters - randomly generated by the library
     */
    orderId: string,
    /** Blockchain transaction in which the order was created */
    transactionId: string,
}


/** @internal */
export async function makeOrder(flex: Flex, options: MakeOrderOptions): Promise<NewOrderInfo> {
    const defaults = flex.config.trader.order;
    const pair = await flex.evr.accounts.get(XchgPairAccount, options.marketAddress);
    const flexAccount = await flex.getFlexAccount();

    const pairDetails = (await pair.getDetails()).output;
    const wallet = await getWallet(flex.evr, {
        marketAddress: options.marketAddress,
        sell: options.sell,
        clientAddress: options.clientAddress,
        trader: options.trader,
    });
    const priceCode = (await pair.getPriceXchgCode({ salted: false })).output.value0;
    const priceSalt = (await pair.getPriceXchgSalt()).output.value0;
    const amount = toUnits(options.amount, pairDetails.major_tip3cfg.decimals);
    const orderId = options.orderId !== undefined
        ? options.orderId
        : await generateRandomOrderId(flex.evr);
    const price = priceToUnits(
        options.price,
        pairDetails.price_denum,
        pairDetails.major_tip3cfg.decimals,
        pairDetails.minor_tip3cfg.decimals,
    );
    const lend_balance = (await flexAccount.calcLendTokensForOrder({
        sell: options.sell,
        major_tokens: amount,
        price,
    })).output.value0;
    const finishTime = options.finishTime ?? Math.floor((Date.now() + 10 * 60 * 60 * 1000) / 1000);

    const minAmount = Number(pairDetails.min_amount) / Math.pow(
        10,
        Number(pairDetails.major_tip3cfg.decimals),
    );
    if (options.amount < minAmount) {
        throw new Error(`Specified amount ${options.amount} is less that market min amount ${minAmount}`);
    }
    const mode = options.mode ?? defaults.mode;
    try {
        const result = await wallet.runMakeOrder({
            _answer_id: 0,
            evers: options.evers ?? defaults.evers,
            lend_balance,
            lend_finish_time: finishTime,
            price_num: price.num,
            unsalted_price_code: priceCode,
            salt: priceSalt,
            args: {
                sell: options.sell,
                immediate_client: mode === MakeOrderMode.IOP || mode === MakeOrderMode.IOC,
                post_order: mode === MakeOrderMode.IOP || mode === MakeOrderMode.POST,
                amount,
                client_addr: options.clientAddress,
                user_id: "0x" + options.trader.id,
                order_id: orderId,
            },
        });
        flex.evr.log.debug(`${JSON.stringify(result.transactionTree, undefined, "   ")}\n`);
        return {
            orderId: orderId.toString(),
            transactionId: result.transaction.id,
        };
    } catch (err: any) {
        throw resolveError(err, {
            O: options.sell ? "sell" : "buy",
            M: `${pairDetails.major_tip3cfg.symbol}/${pairDetails.minor_tip3cfg.symbol}`,
            T: options.sell
                ? pairDetails.major_tip3cfg.symbol
                : pairDetails.minor_tip3cfg.symbol,
            W: await wallet.getAddress(),
        });
    }
}

function resolveError(original: Error & {
    code?: number,
    data?: {
        local_error?: {
            code: number,
        }
    }
}, context: { O: string, M: string, T: string, W: string }): Error {

    if (original.code !== ProcessingErrorCode.MessageExpired) {
        return original;
    }
    const localCode = original.data?.local_error?.code;
    const {
        O,
        M,
        T,
        W,
    } = context;
    let message: string;
    switch (localCode) {
    case TvmErrorCode.AccountCodeMissing:
        message = `Error occurred while performing ${O} on ${M}. ${T} wallet ${W} was not completely activated. You need to deploy it to proceed.`;
        break;
    case TvmErrorCode.AccountMissing:
        message = `Error occurred while performing operation ${O} on ${M} market. You need to activate ${T} wallet ${W} to trade on this Market.`;
        break;
    case TvmErrorCode.AccountFrozenOrDeleted:
        message = `Error occurred while performing ${O} on ${M}. ${T} wallet ${W} was frozen or deleted. You need to deploy it to proceed.`;
        break;
    case TvmErrorCode.LowBalance:
        message = `Error occurred while performing ${O} on ${M} Market. You need to top-up ${T} wallet ${W} to pay fees.`;
        break;
    default:
        message = `Error occurred while performing ${O} on ${M}. Ask DEX Support team for help.`;
        break;
    }
    const flexErr = new Error(message);
    (flexErr as any).originalError = original;
    return flexErr;
}

export async function generateRandomOrderId(evr: Evr): Promise<string> {
    const result = await evr.sdk.crypto.generate_random_bytes({
        length: 8,
    });
    return `0x${Buffer.from(result.bytes, "base64").toString("hex")}`;
}
