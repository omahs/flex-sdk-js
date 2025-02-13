import { AbiContract, Signer, TonClient, TransactionNode } from "@eversdk/core";
import { AccountClass, AccountOptionsEx } from "../../contracts";
import { EvrSigners } from "./signers";
import { Log } from "../../contracts/helpers";
export { AccountOptionsEx };
declare enum MessageType {
    Internal = 0,
    ExtIn = 1,
    ExtOut = 2
}
export type DerivativeTransactionMessage = {
    id: string;
    dst: string;
    msg_type: MessageType;
    created_lt: string;
};
export type DerivativeTransaction = {
    id: string;
    out_messages: DerivativeTransactionMessage[];
    account_addr: string;
    aborted: boolean;
    compute?: {
        exit_code?: number;
    };
    lt: string;
};
export declare class EvrAccounts {
    sdk: TonClient;
    signers: EvrSigners;
    log: Log;
    constructor(sdk: TonClient, signers: EvrSigners, log: Log);
    get<T>(accountClass: new (options: {
        client: TonClient;
        address?: string;
        signer?: Signer;
        log?: Log;
        useCachedState?: boolean;
    }) => T, options: string | AccountOptionsEx): Promise<T>;
    isActive(address: string): Promise<boolean>;
    getBalancesUnits(addresses: string[]): Promise<Map<string, bigint>>;
    getDecimalBalance(address: string): Promise<string>;
    waitForFinalExternalAnswer(transaction: TransactionNode, abi: AbiContract): Promise<any>;
    waitForInternalAnswer(transaction: TransactionNode, abi: AbiContract[]): Promise<import("@eversdk/core").MessageNode>;
    waitForDerivativeTransactions(originTransactionId: string, accounts: {
        [address: string]: AccountClass;
    }): Promise<{
        [address: string]: DerivativeTransaction;
    }>;
    private queryDerivativeTransaction;
    private queryDerivativeTransactionForMessage;
    waitForMessageBody(messageId: string): Promise<string>;
    private queryBlockchain;
}
//# sourceMappingURL=accounts.d.ts.map