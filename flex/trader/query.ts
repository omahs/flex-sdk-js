import { Flex } from "../flex";
import { Market } from "../market";
import { Token } from "../token";
import { WalletInfo, walletInfoFromApi } from "../client";
import { OrderInfo, TradeInfo } from "./types";

/** @internal */
export async function queryOrders(flex: Flex, trader: string): Promise<OrderInfo[]> {
    const result = await flex.query(`
            userOrders(userId:"0x${trader}") {
                pair { ${Market.queryFields()} }
                side
                price
                priceNum
                priceScale
                orderId
                userId
                amountProcessed
                amountLeft
            }
        `);
    return result.userOrders;
}

/** @internal */
export async function queryTrades(flex: Flex, trader: string): Promise<TradeInfo[]> {
    const result = await flex.query(`
        userTrades(userId:"0x${trader}") {
            pair { ${Market.queryFields()} }
            price
            amount
            time
            side
            liquidity
            fees
            feesToken { ${Token.queryFields()} }
            userOrderId 
            cursor
        }
    `);
    return result.userTrades;
}

export type QueryWalletsOptions = {

    clientAddress: string,
    /**
     * Trader ID as uint256 hex string
     */
    traderId?: string,
    /**
     * Token DEX Wrapper address
     */
    token?: string,
}

/** @internal */
export async function queryWallets(
    flex: Flex,
    options: QueryWalletsOptions,
): Promise<WalletInfo[]> {
    const result = await flex.query(`
        wallets(
            clientAddress: "${options.clientAddress}"
            ${options.traderId ? `userId: "0x${options.traderId}"` : ""}
            ${options.token ? `token: "${options.token}",` : ""}
        ) {
            address
            clientAddress
            userId
            dappPubkey
            token { ${Token.queryFields()} }
            nativeCurrencyBalance
            nativeCurrencyBalanceUnits
            totalBalance
            totalBalanceUnits
            availableBalance
            availableBalanceUnits
            balanceInOrders
            balanceInOrdersUnits
            unsaltedPriceCodeHash
            cursor
        }
    `);
    return result.wallets.map(walletInfoFromApi);
}
