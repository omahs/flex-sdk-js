import { Flex, MakeOrderMode } from "../exchange";
import { TraderOptions } from "./types";
import { Evr, TokenValue } from "../web3";
export declare type MakeOrderOptions = {
    clientAddress: string;
    trader: TraderOptions;
    marketAddress: string;
    sell: boolean;
    amount: TokenValue;
    price: TokenValue;
    orderId?: number | string;
    evers?: bigint | number | string;
    finishTime?: number;
    mode?: MakeOrderMode;
    waitForOrderbookUpdate?: boolean;
};
export declare type NewOrderInfo = {
    orderId: string;
    transactionId: string;
    orderbookTransactionId?: string;
};
export declare type MakeOrderProcessing = {
    id: string;
    sell: boolean;
    major: string;
    minor: string;
    wallet: string;
    price: string;
    message: string;
    shard_block_id: string;
};
export declare function makeOrder(flex: Flex, options: MakeOrderOptions): Promise<NewOrderInfo>;
export declare function waitForMakeOrder(flex: Flex, processing: MakeOrderProcessing): Promise<NewOrderInfo>;
export declare function finalizeMakeOrder(flex: Flex, processing: MakeOrderProcessing, transactionId: string): Promise<NewOrderInfo>;
export declare function generateRandomOrderId(evr: Evr): Promise<string>;
//# sourceMappingURL=make-order.d.ts.map