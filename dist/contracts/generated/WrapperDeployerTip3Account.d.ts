import { Account, AccountOptions } from "@eversdk/appkit";
import { RunHelperOptions, RunHelperResult, RunLocalHelperResult, Transaction, ContractPackageEx, Log } from "../helpers";
export type WrapperDeployerTip3SetWrapperCodeInput = {
    code: string;
};
export type WrapperDeployerTip3SetExtWalletCodeInput = {
    code: string;
};
export type WrapperDeployerTip3SetFlexWalletCodeInput = {
    code: string;
};
export type WrapperDeployerTip3DeployInput = {
    _answer_id: number;
    init_args: string;
    wic_unsalted_code: string;
};
export type WrapperDeployerTip3DeployOutput = {
    first: string;
    second: string;
};
export type WrapperDeployerTip3GetArgsInput = {
    tip3cfg: {
        name: string;
        symbol: string;
        decimals: number;
        root_pubkey: string | number | bigint;
        root_address: string;
    };
};
export type WrapperDeployerTip3GetArgsOutput = {
    value0: string;
};
export declare class WrapperDeployerTip3Account extends Account {
    static package: ContractPackageEx;
    log: Log;
    constructor(options: AccountOptions & {
        log?: Log;
    });
    deployContract(input: {
        pubkey: string | number | bigint;
        wrapper_pubkey: string | number | bigint;
        super_root: string;
        ext_wallet_value: string | number | bigint;
        wrapper_deploy_value: string | number | bigint;
        wrapper_keep_balance: string | number | bigint;
        reserve_wallet_value: string | number | bigint;
    }): Promise<{
        transaction: Transaction;
    }>;
    runSetWrapperCode(input: WrapperDeployerTip3SetWrapperCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    setWrapperCode(input: WrapperDeployerTip3SetWrapperCodeInput): Promise<RunLocalHelperResult<void>>;
    runSetExtWalletCode(input: WrapperDeployerTip3SetExtWalletCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    setExtWalletCode(input: WrapperDeployerTip3SetExtWalletCodeInput): Promise<RunLocalHelperResult<void>>;
    runSetFlexWalletCode(input: WrapperDeployerTip3SetFlexWalletCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>>;
    setFlexWalletCode(input: WrapperDeployerTip3SetFlexWalletCodeInput): Promise<RunLocalHelperResult<void>>;
    runDeploy(input: WrapperDeployerTip3DeployInput, options?: RunHelperOptions): Promise<RunHelperResult<WrapperDeployerTip3DeployOutput>>;
    deploy_(input: WrapperDeployerTip3DeployInput): Promise<RunLocalHelperResult<WrapperDeployerTip3DeployOutput>>;
    runGetArgs(input: WrapperDeployerTip3GetArgsInput, options?: RunHelperOptions): Promise<RunHelperResult<WrapperDeployerTip3GetArgsOutput>>;
    getArgs(input: WrapperDeployerTip3GetArgsInput): Promise<RunLocalHelperResult<WrapperDeployerTip3GetArgsOutput>>;
}
//# sourceMappingURL=WrapperDeployerTip3Account.d.ts.map