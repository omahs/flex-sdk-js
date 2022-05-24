import { Account, AccountOptions } from "@eversdk/appkit";
import { Transaction, ContractPackageEx, Log } from "../helpers";
export declare type WrapperEverInitInput = {
    _answer_id: number;
    reserve_wallet_evers: string | number | bigint;
    internal_wallet_code: string;
};
export declare type WrapperEverInitOutput = {
    value0: boolean;
};
export declare type WrapperEverDeployEmptyWalletInput = {
    _answer_id: number;
    pubkey: string | number | bigint;
    owner?: string;
    evers: string | number | bigint;
};
export declare type WrapperEverDeployEmptyWalletOutput = {
    value0: string;
};
export declare type WrapperEverOnEverTransferInput = {
    _answer_id: number;
    tokens: string | number | bigint;
    args: {
        pubkey: string | number | bigint;
        owner?: string;
        evers: string | number | bigint;
        keep_evers: string | number | bigint;
    };
    answer_addr: string;
};
export declare type WrapperEverBurnInput = {
    tokens: string | number | bigint;
    answer_addr: string;
    sender_pubkey: string | number | bigint;
    sender_owner?: string;
    out_pubkey: string | number | bigint;
    out_owner?: string;
};
export declare type WrapperEverTransferFromReserveWalletInput = {
    answer_addr?: string;
    to: string;
    tokens: string | number | bigint;
};
export declare type WrapperEverRequestTotalGrantedInput = {
    _answer_id: number;
};
export declare type WrapperEverRequestTotalGrantedOutput = {
    value0: string;
};
export declare type WrapperEverGetDetailsOutput = {
    name: string;
    symbol: string;
    decimals: number;
    root_pubkey: string;
    total_granted: string;
    wallet_code: string;
    external_wallet?: string;
    reserve_wallet: string;
    super_root: string;
};
export declare type WrapperEverGetTip3ConfigOutput = {
    name: string;
    symbol: string;
    decimals: number;
    root_pubkey: string;
    root_address: string;
};
export declare type WrapperEverHasInternalWalletCodeOutput = {
    value0: boolean;
};
export declare type WrapperEverGetWalletAddressInput = {
    pubkey: string | number | bigint;
    owner?: string;
};
export declare type WrapperEverGetWalletAddressOutput = {
    value0: string;
};
export declare type WrapperEverGetReserveWalletOutput = {
    value0: string;
};
export declare class WrapperEverAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(): Promise<{
        transaction: Transaction;
    }>;
    runInit(input: WrapperEverInitInput): Promise<{
        transaction: Transaction;
        output: WrapperEverInitOutput;
    }>;
    init(input: WrapperEverInitInput): Promise<{
        transaction: Transaction;
        output: WrapperEverInitOutput;
    }>;
    runDeployEmptyWallet(input: WrapperEverDeployEmptyWalletInput): Promise<{
        transaction: Transaction;
        output: WrapperEverDeployEmptyWalletOutput;
    }>;
    deployEmptyWallet(input: WrapperEverDeployEmptyWalletInput): Promise<{
        transaction: Transaction;
        output: WrapperEverDeployEmptyWalletOutput;
    }>;
    runOnEverTransfer(input: WrapperEverOnEverTransferInput): Promise<{
        transaction: Transaction;
    }>;
    onEverTransfer(input: WrapperEverOnEverTransferInput): Promise<{
        transaction: Transaction;
    }>;
    runBurn(input: WrapperEverBurnInput): Promise<{
        transaction: Transaction;
    }>;
    burn(input: WrapperEverBurnInput): Promise<{
        transaction: Transaction;
    }>;
    runTransferFromReserveWallet(input: WrapperEverTransferFromReserveWalletInput): Promise<{
        transaction: Transaction;
    }>;
    transferFromReserveWallet(input: WrapperEverTransferFromReserveWalletInput): Promise<{
        transaction: Transaction;
    }>;
    runRequestTotalGranted(input: WrapperEverRequestTotalGrantedInput): Promise<{
        transaction: Transaction;
        output: WrapperEverRequestTotalGrantedOutput;
    }>;
    requestTotalGranted(input: WrapperEverRequestTotalGrantedInput): Promise<{
        transaction: Transaction;
        output: WrapperEverRequestTotalGrantedOutput;
    }>;
    runGetDetails(): Promise<{
        transaction: Transaction;
        output: WrapperEverGetDetailsOutput;
    }>;
    getDetails(): Promise<{
        transaction: Transaction;
        output: WrapperEverGetDetailsOutput;
    }>;
    runGetTip3Config(): Promise<{
        transaction: Transaction;
        output: WrapperEverGetTip3ConfigOutput;
    }>;
    getTip3Config(): Promise<{
        transaction: Transaction;
        output: WrapperEverGetTip3ConfigOutput;
    }>;
    runHasInternalWalletCode(): Promise<{
        transaction: Transaction;
        output: WrapperEverHasInternalWalletCodeOutput;
    }>;
    hasInternalWalletCode(): Promise<{
        transaction: Transaction;
        output: WrapperEverHasInternalWalletCodeOutput;
    }>;
    runGetWalletAddress(input: WrapperEverGetWalletAddressInput): Promise<{
        transaction: Transaction;
        output: WrapperEverGetWalletAddressOutput;
    }>;
    getWalletAddress(input: WrapperEverGetWalletAddressInput): Promise<{
        transaction: Transaction;
        output: WrapperEverGetWalletAddressOutput;
    }>;
    runGetReserveWallet(): Promise<{
        transaction: Transaction;
        output: WrapperEverGetReserveWalletOutput;
    }>;
    getReserveWallet(): Promise<{
        transaction: Transaction;
        output: WrapperEverGetReserveWalletOutput;
    }>;
}
//# sourceMappingURL=WrapperEverAccount.d.ts.map