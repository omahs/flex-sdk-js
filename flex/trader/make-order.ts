import { Flex, MakeOrderMode } from "../exchange";
import { abiContract, ProcessingErrorCode, TvmErrorCode } from "@eversdk/core";
import {
    FlexClientAccount, FlexWalletAccount, PriceXchgAccount, resolveContractError, successRequired,
    XchgPairAccount,
} from "../../contracts";
import {
    getWallet,
} from "./internals";
import { TraderOptions } from "./types";
import { toUnits, Evr, TokenValue } from "../web3";
import { priceToUnits } from "../flex";

export type MakeOrderOptions = {
    clientAddress: string;
    trader: TraderOptions,
    marketAddress: string,
    /** Trade direction */
    sell: boolean,
    /** Amount of Major token to buy or sell */
    amount: TokenValue,
    /** Price of Major token */
    price: TokenValue,
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

    /** Wait for the transaction which updates the price contract (orderbook) */
    waitForOrderbookUpdate?: boolean,
};

export type NewOrderInfo = {
    /**
     * uint64 hex string(0x prefixed) with Order ID.
     * If omitted in makeOrder parameters - randomly generated by the library
     */
    orderId: string,

    /** Wallet transaction in which the order creation was initiated */
    transactionId: string,

    /** Orderbook (price) transaction in which the order was created */
    orderbookTransactionId?: string,
}

export type MakeOrderProcessing = {
    id: string,
    sell: boolean,
    major: string,
    minor: string,
    wallet: string,
    price: string,
    message: string,
    shard_block_id: string,
};

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
    const saltedPriceCode = (await pair.getPriceXchgCode({ salted: true })).output.value0;
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

    if (BigInt(amount) < BigInt(pairDetails.min_amount)) {
        throw new Error(`Specified amount ${amount} is less that market min amount ${pairDetails.min_amount}`);
    }
    const clientAccount = await flex.evr.accounts.get(
        FlexClientAccount,
        options.clientAddress,
    );

    const priceAddress = (await clientAccount.getPriceXchgAddress({
        price_num: price.num,
        salted_price_code: saltedPriceCode,
    })).output.value0;
    const mode = options.mode ?? defaults.mode;

    const processing: MakeOrderProcessing = {
        id: orderId.toString(),
        sell: options.sell,
        major: pairDetails.major_tip3cfg.symbol,
        minor: pairDetails.minor_tip3cfg.symbol,
        wallet: await wallet.getAddress(),
        price: priceAddress,
        message: "",
        shard_block_id: "",
    };
    try {
        const transaction = (await wallet.runMakeOrder({
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
        }, {
            skipTransactionTree: true,
            onProcessing: (evt) => {
                if (evt.type === "WillSend") {
                    processing.message = evt.message;
                    processing.shard_block_id = evt.shard_block_id;
                }
            },
        })).transaction;
        return finalizeMakeOrder(flex, processing, transaction.id);
    } catch (err: any) {
        throw resolveError(err, processing);
    }
}

/** @internal */
export async function waitForMakeOrder(
    flex: Flex,
    processing: MakeOrderProcessing,
): Promise<NewOrderInfo> {
    try {
        const transaction = (await flex.evr.sdk.processing.wait_for_transaction({
            message: processing.message,
            shard_block_id: processing.shard_block_id,
            abi: abiContract(FlexWalletAccount.package.abi),
            send_events: false,
            sending_endpoints: [],
        })).transaction;
        return finalizeMakeOrder(flex, processing, transaction.id);
    } catch (err: any) {
        throw resolveError(err, processing);
    }
}

/** @internal */
export async function finalizeMakeOrder(
    flex: Flex,
    processing: MakeOrderProcessing,
    transactionId: string,
): Promise<NewOrderInfo> {
    const result: NewOrderInfo = {
        orderId: processing.id,
        transactionId,
    };

    const transactions = await flex.evr.accounts.waitForDerivativeTransactions(
        transactionId,
        {
            [processing.price]: PriceXchgAccount,
            [processing.wallet]: FlexWalletAccount,
        },
    );

    processing.message = "";
    processing.shard_block_id = "";

    successRequired(transactions, processing.wallet, FlexWalletAccount);
    successRequired(transactions, processing.price, PriceXchgAccount);
    result.orderbookTransactionId = transactions[processing.price]!.id;

    return result;
}

type SdkError = Error & {
    code?: number,
    data?: {
        local_error?: {
            code: number,
            data?: {
                exit_code?: number
            }
        }
    }
};

type ErrorWithProcessing = Error & {
    processing?: MakeOrderProcessing,
};

function resolveError(
    original: SdkError & ErrorWithProcessing,
    processing: MakeOrderProcessing,
): ErrorWithProcessing {
    const messageRejected = original.code === ProcessingErrorCode.MessageExpired || original.code === ProcessingErrorCode.MessageRejected;
    if (!messageRejected) {
        if (processing && processing.message !== "") {
            original.processing = processing;
        }
        return original;
    }
    let originalError = original;
    const localCode = originalError.data?.local_error?.code;
    const O = processing.sell ? "sell" : "buy";
    const M = `${processing.major}/${processing.minor}`;
    const T = processing.sell
        ? processing.major
        : processing.minor;
    const W = processing.wallet;
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
        originalError = resolveContractError(originalError, FlexWalletAccount);
        message = `Error occurred while performing ${O} on ${M}. ${originalError.message}. Ask DEX Support team for help.`;
        break;
    }
    const flexErr: Error & {
        originalError?: SdkError,
        processing?: MakeOrderProcessing,
    } = new Error(message);
    flexErr.originalError = {
        ...originalError,
        message: originalError.message,
    };
    return flexErr;
}

export async function generateRandomOrderId(evr: Evr): Promise<string> {
    const result = await evr.sdk.crypto.generate_random_bytes({
        length: 8,
    });
    return `0x${Buffer.from(result.bytes, "base64").toString("hex")}`;
}
