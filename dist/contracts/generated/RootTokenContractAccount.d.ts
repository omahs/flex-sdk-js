import { Account, AccountOptions } from "@eversdk/appkit";
import { RunHelperOptions, RunHelperResult, RunLocalHelperResult, Transaction, ContractPackageEx, Log } from "../helpers";
export declare type RootTokenContractSetWalletCodeInput = {
    _answer_id: number;
    wallet_code: string;
};
export declare type RootTokenContractSetWalletCodeOutput = {
    value0: boolean;
};
export declare type RootTokenContractDeployWalletInput = {
    _answer_id: number;
    pubkey: string | number | bigint;
    owner?: string;
    tokens: string | number | bigint;
    evers: string | number | bigint;
    notify?: string;
};
export declare type RootTokenContractDeployWalletOutput = {
    value0: string;
};
export declare type RootTokenContractDeployEmptyWalletInput = {
    _answer_id: number;
    pubkey: string | number | bigint;
    owner?: string;
    evers: string | number | bigint;
};
export declare type RootTokenContractDeployEmptyWalletOutput = {
    value0: string;
};
export declare type RootTokenContractGrantInput = {
    _answer_id: number;
    dest: string;
    tokens: string | number | bigint;
    evers: string | number | bigint;
    notify?: string;
};
export declare type RootTokenContractMintInput = {
    _answer_id: number;
    tokens: string | number | bigint;
};
export declare type RootTokenContractMintOutput = {
    value0: boolean;
};
export declare type RootTokenContractRequestTotalGrantedInput = {
    _answer_id: number;
};
export declare type RootTokenContractRequestTotalGrantedOutput = {
    value0: string;
};
export declare type RootTokenContractGetNameOutput = {
    value0: string;
};
export declare type RootTokenContractGetSymbolOutput = {
    value0: string;
};
export declare type RootTokenContractGetDecimalsOutput = {
    value0: number;
};
export declare type RootTokenContractGetRootKeyOutput = {
    value0: string;
};
export declare type RootTokenContractGetRootOwnerOutput = {
    value0?: string;
};
export declare type RootTokenContractGetTotalSupplyOutput = {
    value0: string;
};
export declare type RootTokenContractGetTotalGrantedOutput = {
    value0: string;
};
export declare type RootTokenContractHasWalletCodeOutput = {
    value0: boolean;
};
export declare type RootTokenContractGetWalletCodeOutput = {
    value0: string;
};
export declare type RootTokenContractGetWalletAddressInput = {
    pubkey: string | number | bigint;
    owner?: string;
};
export declare type RootTokenContractGetWalletAddressOutput = {
    value0: string;
};
export declare type RootTokenContractGetWalletCodeHashOutput = {
    value0: string;
};
export declare class RootTokenContractAccount extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(input: {
        name: string;
        symbol: string;
        decimals: number;
        root_pubkey: string | number | bigint;
        root_owner?: string;
        total_supply: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runSetWalletCode(input: RootTokenContractSetWalletCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<RootTokenContractSetWalletCodeOutput>>;
    setWalletCode(input: RootTokenContractSetWalletCodeInput): Promise<RunLocalHelperResult<RootTokenContractSetWalletCodeOutput>>;
    runDeployWallet(input: RootTokenContractDeployWalletInput, options?: RunHelperOptions): Promise<RunHelperResult<RootTokenContractDeployWalletOutput>>;
    deployWallet(input: RootTokenContractDeployWalletInput): Promise<RunLocalHelperResult<RootTokenContractDeployWalletOutput>>;
    runDeployEmptyWallet(input: RootTokenContractDeployEmptyWalletInput, options?: RunHelperOptions): Promise<RunHelperResult<RootTokenContractDeployEmptyWalletOutput>>;
    deployEmptyWallet(input: RootTokenContractDeployEmptyWalletInput): Promise<RunLocalHelperResult<RootTokenContractDeployEmptyWalletOutput>>;
    runGrant(input: RootTokenContractGrantInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    grant(input: RootTokenContractGrantInput): Promise<RunLocalHelperResult<void>>;
    runMint(input: RootTokenContractMintInput, options?: RunHelperOptions): Promise<RunHelperResult<RootTokenContractMintOutput>>;
    mint(input: RootTokenContractMintInput): Promise<RunLocalHelperResult<RootTokenContractMintOutput>>;
    runRequestTotalGranted(input: RootTokenContractRequestTotalGrantedInput, options?: RunHelperOptions): Promise<RunHelperResult<RootTokenContractRequestTotalGrantedOutput>>;
    requestTotalGranted(input: RootTokenContractRequestTotalGrantedInput): Promise<RunLocalHelperResult<RootTokenContractRequestTotalGrantedOutput>>;
    runGetName(options?: RunHelperOptions): Promise<RunHelperResult<RootTokenContractGetNameOutput>>;
    getName(): Promise<RunLocalHelperResult<RootTokenContractGetNameOutput>>;
    runGetSymbol(options?: RunHelperOptions): Promise<RunHelperResult<RootTokenContractGetSymbolOutput>>;
    getSymbol(): Promise<RunLocalHelperResult<RootTokenContractGetSymbolOutput>>;
    runGetDecimals(options?: RunHelperOptions): Promise<RunHelperResult<RootTokenContractGetDecimalsOutput>>;
    getDecimals(): Promise<RunLocalHelperResult<RootTokenContractGetDecimalsOutput>>;
    runGetRootKey(options?: RunHelperOptions): Promise<RunHelperResult<RootTokenContractGetRootKeyOutput>>;
    getRootKey(): Promise<RunLocalHelperResult<RootTokenContractGetRootKeyOutput>>;
    runGetRootOwner(options?: RunHelperOptions): Promise<RunHelperResult<RootTokenContractGetRootOwnerOutput>>;
    getRootOwner(): Promise<RunLocalHelperResult<RootTokenContractGetRootOwnerOutput>>;
    runGetTotalSupply(options?: RunHelperOptions): Promise<RunHelperResult<RootTokenContractGetTotalSupplyOutput>>;
    getTotalSupply(): Promise<RunLocalHelperResult<RootTokenContractGetTotalSupplyOutput>>;
    runGetTotalGranted(options?: RunHelperOptions): Promise<RunHelperResult<RootTokenContractGetTotalGrantedOutput>>;
    getTotalGranted(): Promise<RunLocalHelperResult<RootTokenContractGetTotalGrantedOutput>>;
    runHasWalletCode(options?: RunHelperOptions): Promise<RunHelperResult<RootTokenContractHasWalletCodeOutput>>;
    hasWalletCode(): Promise<RunLocalHelperResult<RootTokenContractHasWalletCodeOutput>>;
    runGetWalletCode(options?: RunHelperOptions): Promise<RunHelperResult<RootTokenContractGetWalletCodeOutput>>;
    getWalletCode(): Promise<RunLocalHelperResult<RootTokenContractGetWalletCodeOutput>>;
    runGetWalletAddress(input: RootTokenContractGetWalletAddressInput, options?: RunHelperOptions): Promise<RunHelperResult<RootTokenContractGetWalletAddressOutput>>;
    getWalletAddress(input: RootTokenContractGetWalletAddressInput): Promise<RunLocalHelperResult<RootTokenContractGetWalletAddressOutput>>;
    runGetWalletCodeHash(options?: RunHelperOptions): Promise<RunHelperResult<RootTokenContractGetWalletCodeHashOutput>>;
    getWalletCodeHash(): Promise<RunLocalHelperResult<RootTokenContractGetWalletCodeHashOutput>>;
}
//# sourceMappingURL=RootTokenContractAccount.d.ts.map