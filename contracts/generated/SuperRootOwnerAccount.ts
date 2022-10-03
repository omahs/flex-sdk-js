
import { Account, AccountOptions } from "@eversdk/appkit";
import {
    AbiContract,
} from "@eversdk/core";
import { 
    deployHelper,
    RunHelperOptions,
    RunHelperResult,
    RunLocalHelperResult,
    runHelper, 
    runLocalHelper, 
    Transaction, 
    ContractPackageEx, 
    Log, 
} from "../helpers";
export type SuperRootOwnerSetCodeInput = {
    type: number /* uint8 */,
    code: string /* cell */,
};

export type SuperRootOwnerDeploySuperRootInput = {
    evers: string | number | bigint /* uint128 */,
    prev_super_root?: string /* optional(address) */,
};

export type SuperRootOwnerDeploySuperRootOutput = {
    value0: string /* address */,
};

export type SuperRootOwnerUpdateInput = {
    main_evers: string | number | bigint /* uint128 */,
    cfg_deploy_evers: string | number | bigint /* uint128 */,
    cfg_keep_evers: string | number | bigint /* uint128 */,
    version: {
        wallet: number /* uint32 */,
        exchange: number /* uint32 */,
        user: number /* uint32 */,
    } /* tuple */,
    wrappers_cfg: string /* address */,
    flex: string /* address */,
    user_cfg: string /* address */,
    description: string /* string */,
};

export type SuperRootOwnerReleaseInput = {
    main_evers: string | number | bigint /* uint128 */,
};

export type SuperRootOwnerAddWrapperTypeInput = {
    main_evers: string | number | bigint /* uint128 */,
    wrappers_cfg_keep_evers: string | number | bigint /* uint128 */,
    wrappers_cfg: string /* address */,
    type: number /* uint8 */,
    wrapper_deployer: string /* address */,
};

export type SuperRootOwnerAddWrapperInput = {
    main_evers: string | number | bigint /* uint128 */,
    wrappers_cfg_keep_evers: string | number | bigint /* uint128 */,
    wrappers_cfg: string /* address */,
    evers: {
        deploy: string | number | bigint /* uint128 */,
        setnext: string | number | bigint /* uint128 */,
        wic_keep: string | number | bigint /* uint128 */,
    } /* tuple */,
    symbol: string /* string */,
    type: number /* uint8 */,
    init_args: string /* cell */,
};

export type SuperRootOwnerAddXchgPairInput = {
    main_evers: string | number | bigint /* uint128 */,
    flex: string /* address */,
    evers: {
        deploy: string | number | bigint /* uint128 */,
        setnext: string | number | bigint /* uint128 */,
        pair_keep: string | number | bigint /* uint128 */,
    } /* tuple */,
    major_tip3cfg: {
        name: string /* string */,
        symbol: string /* string */,
        decimals: number /* uint8 */,
        root_pubkey: string | number | bigint /* uint256 */,
        root_address: string /* address */,
    } /* tuple */,
    minor_tip3cfg: {
        name: string /* string */,
        symbol: string /* string */,
        decimals: number /* uint8 */,
        root_pubkey: string | number | bigint /* uint256 */,
        root_address: string /* address */,
    } /* tuple */,
    min_amount: string | number | bigint /* uint128 */,
    minmove: string | number | bigint /* uint128 */,
    price_denum: string | number | bigint /* uint128 */,
    notify_addr: string /* address */,
};

export type SuperRootOwnerUnlistWrapperInput = {
    main_evers: string | number | bigint /* uint128 */,
    wrappers_cfg: string /* address */,
    wic: string /* address */,
};

export type SuperRootOwnerUnlistXchgPairInput = {
    main_evers: string | number | bigint /* uint128 */,
    flex: string /* address */,
    pair: string /* address */,
};

export type SuperRootOwnerUpgradeBroxusWrapperWalletInput = {
    main_evers: string | number | bigint /* uint128 */,
    wrapper: string /* address */,
};

export type SuperRootOwnerDeployWrappersConfigInput = {
    main_evers: string | number | bigint /* uint128 */,
    deploy_evers: string | number | bigint /* uint128 */,
    wrappers_cfg_keep_evers: string | number | bigint /* uint128 */,
    token_version: number /* uint32 */,
};

export type SuperRootOwnerDeployWrappersConfigOutput = {
    value0: string /* address */,
};

export type SuperRootOwnerDeployFlexInput = {
    main_evers: string | number | bigint /* uint128 */,
    deploy_evers: string | number | bigint /* uint128 */,
    keep_evers: string | number | bigint /* uint128 */,
    evers: {
        deploy: string | number | bigint /* uint128 */,
        setnext: string | number | bigint /* uint128 */,
        pair_keep: string | number | bigint /* uint128 */,
    } /* tuple */,
    old_flex?: string /* optional(address) */,
    exchange_version: number /* uint32 */,
    ev_cfg: {
        transfer_tip3: string | number | bigint /* uint128 */,
        return_ownership: string | number | bigint /* uint128 */,
        order_answer: string | number | bigint /* uint128 */,
        process_queue: string | number | bigint /* uint128 */,
        send_notify: string | number | bigint /* uint128 */,
        dest_wallet_keep_evers: string | number | bigint /* uint128 */,
    } /* tuple */,
    deals_limit: number /* uint8 */,
};

export type SuperRootOwnerDeployFlexOutput = {
    value0: string /* address */,
};

export type SuperRootOwnerDeployUserDataConfigInput = {
    main_evers: string | number | bigint /* uint128 */,
    deploy_evers: string | number | bigint /* uint128 */,
    triplet: {
        wallet: number /* uint32 */,
        exchange: number /* uint32 */,
        user: number /* uint32 */,
    } /* tuple */,
    flex: string /* address */,
};

export type SuperRootOwnerDeployUserDataConfigOutput = {
    value0: string /* address */,
};

export type SuperRootOwnerCloneWrappersConfigInput = {
    main_evers: string | number | bigint /* uint128 */,
    wrappers_cfg: string /* address */,
    wrapper_cfg_keep_evers: string | number | bigint /* uint128 */,
    clone_deploy_evers: string | number | bigint /* uint128 */,
    wic_evers: {
        deploy: string | number | bigint /* uint128 */,
        setnext: string | number | bigint /* uint128 */,
        wic_keep: string | number | bigint /* uint128 */,
    } /* tuple */,
    new_token_version: number /* uint32 */,
    wrapper_deployers: string[] /* address[] */,
};

export type SuperRootOwnerCloneWrappersConfigOutput = {
    value0: string /* address */,
};

export type SuperRootOwnerSetFlagsInput = {
    main_evers: string | number | bigint /* uint128 */,
    stop_trade?: boolean /* optional(bool) */,
    abandon_ship?: boolean /* optional(bool) */,
    update_started?: boolean /* optional(bool) */,
};

export type SuperRootOwnerTransferInput = {
    main_evers: string | number | bigint /* uint128 */,
    to: string /* address */,
    evers: string | number | bigint /* uint128 */,
};

export type SuperRootOwnerTransferReserveTokensInput = {
    main_evers: string | number | bigint /* uint128 */,
    wrapper: string /* address */,
    tokens: string | number | bigint /* uint128 */,
    to: string /* address */,
};

export type SuperRootOwnerSetOwnerInput = {
    main_evers: string | number | bigint /* uint128 */,
    owner: string /* address */,
};

export type SuperRootOwnerSetUpdateTeamInput = {
    main_evers: string | number | bigint /* uint128 */,
    team?: string /* optional(address) */,
};

export type SuperRootOwnerSetNextSuperRootInput = {
    main_evers: string | number | bigint /* uint128 */,
    next_super_root: string /* address */,
};

export type SuperRootOwnerGetDetailsOutput = {
    initialized: boolean /* bool */,
    pubkey: string /* uint256 */,
    super_root?: string /* optional(address) */,
    super_root_code?: string /* optional(cell) */,
    global_cfg_code?: string /* optional(cell) */,
    flex_client_stub?: string /* optional(cell) */,
    wrappers_cfg_code?: string /* optional(cell) */,
    wic_code?: string /* optional(cell) */,
    flex_code?: string /* optional(cell) */,
    pair_code?: string /* optional(cell) */,
    price_code?: string /* optional(cell) */,
    user_data_cfg_code?: string /* optional(cell) */,
    flex_client_code?: string /* optional(cell) */,
    auth_index_code?: string /* optional(cell) */,
    user_id_index_code?: string /* optional(cell) */,
};


export class SuperRootOwnerAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"pubkey","type":"uint256"}],"outputs":[]},{"name":"setCode","inputs":[{"name":"type","type":"uint8"},{"name":"code","type":"cell"}],"outputs":[]},{"name":"deploySuperRoot","inputs":[{"name":"evers","type":"uint128"},{"name":"prev_super_root","type":"optional(address)"}],"outputs":[{"name":"value0","type":"address"}]},{"name":"update","inputs":[{"name":"main_evers","type":"uint128"},{"name":"cfg_deploy_evers","type":"uint128"},{"name":"cfg_keep_evers","type":"uint128"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"version","type":"tuple"},{"name":"wrappers_cfg","type":"address"},{"name":"flex","type":"address"},{"name":"user_cfg","type":"address"},{"name":"description","type":"string"}],"outputs":[]},{"name":"release","inputs":[{"name":"main_evers","type":"uint128"}],"outputs":[]},{"name":"addWrapperType","inputs":[{"name":"main_evers","type":"uint128"},{"name":"wrappers_cfg_keep_evers","type":"uint128"},{"name":"wrappers_cfg","type":"address"},{"name":"type","type":"uint8"},{"name":"wrapper_deployer","type":"address"}],"outputs":[]},{"name":"addWrapper","inputs":[{"name":"main_evers","type":"uint128"},{"name":"wrappers_cfg_keep_evers","type":"uint128"},{"name":"wrappers_cfg","type":"address"},{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"wic_keep","type":"uint128"}],"name":"evers","type":"tuple"},{"name":"symbol","type":"string"},{"name":"type","type":"uint8"},{"name":"init_args","type":"cell"}],"outputs":[]},{"name":"addXchgPair","inputs":[{"name":"main_evers","type":"uint128"},{"name":"flex","type":"address"},{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"pair_keep","type":"uint128"}],"name":"evers","type":"tuple"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"major_tip3cfg","type":"tuple"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"minor_tip3cfg","type":"tuple"},{"name":"min_amount","type":"uint128"},{"name":"minmove","type":"uint128"},{"name":"price_denum","type":"uint128"},{"name":"notify_addr","type":"address"}],"outputs":[]},{"name":"unlistWrapper","inputs":[{"name":"main_evers","type":"uint128"},{"name":"wrappers_cfg","type":"address"},{"name":"wic","type":"address"}],"outputs":[]},{"name":"unlistXchgPair","inputs":[{"name":"main_evers","type":"uint128"},{"name":"flex","type":"address"},{"name":"pair","type":"address"}],"outputs":[]},{"name":"upgradeBroxusWrapperWallet","inputs":[{"name":"main_evers","type":"uint128"},{"name":"wrapper","type":"address"}],"outputs":[]},{"name":"deployWrappersConfig","inputs":[{"name":"main_evers","type":"uint128"},{"name":"deploy_evers","type":"uint128"},{"name":"wrappers_cfg_keep_evers","type":"uint128"},{"name":"token_version","type":"uint32"}],"outputs":[{"name":"value0","type":"address"}]},{"name":"deployFlex","inputs":[{"name":"main_evers","type":"uint128"},{"name":"deploy_evers","type":"uint128"},{"name":"keep_evers","type":"uint128"},{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"pair_keep","type":"uint128"}],"name":"evers","type":"tuple"},{"name":"old_flex","type":"optional(address)"},{"name":"exchange_version","type":"uint32"},{"components":[{"name":"transfer_tip3","type":"uint128"},{"name":"return_ownership","type":"uint128"},{"name":"order_answer","type":"uint128"},{"name":"process_queue","type":"uint128"},{"name":"send_notify","type":"uint128"},{"name":"dest_wallet_keep_evers","type":"uint128"}],"name":"ev_cfg","type":"tuple"},{"name":"deals_limit","type":"uint8"}],"outputs":[{"name":"value0","type":"address"}]},{"name":"deployUserDataConfig","inputs":[{"name":"main_evers","type":"uint128"},{"name":"deploy_evers","type":"uint128"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"triplet","type":"tuple"},{"name":"flex","type":"address"}],"outputs":[{"name":"value0","type":"address"}]},{"name":"cloneWrappersConfig","inputs":[{"name":"main_evers","type":"uint128"},{"name":"wrappers_cfg","type":"address"},{"name":"wrapper_cfg_keep_evers","type":"uint128"},{"name":"clone_deploy_evers","type":"uint128"},{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"wic_keep","type":"uint128"}],"name":"wic_evers","type":"tuple"},{"name":"new_token_version","type":"uint32"},{"name":"wrapper_deployers","type":"address[]"}],"outputs":[{"name":"value0","type":"address"}]},{"name":"setFlags","inputs":[{"name":"main_evers","type":"uint128"},{"name":"stop_trade","type":"optional(bool)"},{"name":"abandon_ship","type":"optional(bool)"},{"name":"update_started","type":"optional(bool)"}],"outputs":[]},{"name":"transfer","inputs":[{"name":"main_evers","type":"uint128"},{"name":"to","type":"address"},{"name":"evers","type":"uint128"}],"outputs":[]},{"name":"transferReserveTokens","inputs":[{"name":"main_evers","type":"uint128"},{"name":"wrapper","type":"address"},{"name":"tokens","type":"uint128"},{"name":"to","type":"address"}],"outputs":[]},{"name":"setOwner","inputs":[{"name":"main_evers","type":"uint128"},{"name":"owner","type":"address"}],"outputs":[]},{"name":"setUpdateTeam","inputs":[{"name":"main_evers","type":"uint128"},{"name":"team","type":"optional(address)"}],"outputs":[]},{"name":"setNextSuperRoot","inputs":[{"name":"main_evers","type":"uint128"},{"name":"next_super_root","type":"address"}],"outputs":[]},{"name":"getDetails","inputs":[],"outputs":[{"name":"initialized","type":"bool"},{"name":"pubkey","type":"uint256"},{"name":"super_root","type":"optional(address)"},{"name":"super_root_code","type":"optional(cell)"},{"name":"global_cfg_code","type":"optional(cell)"},{"name":"flex_client_stub","type":"optional(cell)"},{"name":"wrappers_cfg_code","type":"optional(cell)"},{"name":"wic_code","type":"optional(cell)"},{"name":"flex_code","type":"optional(cell)"},{"name":"pair_code","type":"optional(cell)"},{"name":"price_code","type":"optional(cell)"},{"name":"user_data_cfg_code","type":"optional(cell)"},{"name":"flex_client_code","type":"optional(cell)"},{"name":"auth_index_code","type":"optional(cell)"},{"name":"user_id_index_code","type":"optional(cell)"}]}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"__replay","type":"uint64"},{"name":"__await_next_id","type":"uint32"},{"name":"__await_dict","type":"optional(cell)"},{"name":"pubkey_","type":"uint256"},{"name":"super_root_","type":"optional(address)"},{"name":"super_root_code_","type":"optional(cell)"},{"name":"global_cfg_code_","type":"optional(cell)"},{"name":"flex_client_stub_","type":"optional(cell)"},{"name":"wrappers_cfg_code_","type":"optional(cell)"},{"name":"wic_code_","type":"optional(cell)"},{"name":"flex_code_","type":"optional(cell)"},{"name":"pair_code_","type":"optional(cell)"},{"name":"price_code_","type":"optional(cell)"},{"name":"user_data_cfg_code_","type":"optional(cell)"},{"name":"flex_client_code_","type":"optional(cell)"},{"name":"auth_index_code_","type":"optional(cell)"},{"name":"user_id_index_code_","type":"optional(cell)"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "bad84d33fb2639076c1a2f47e67e65054425fe093dcca5fffaddcb157bc7df27",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(SuperRootOwnerAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(input: {
        pubkey: string | number | bigint /* uint256 */,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "constructor", input);
    }

    async runSetCode(input: SuperRootOwnerSetCodeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "setCode", input, options);
    }

    async setCode(input: SuperRootOwnerSetCodeInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "setCode", input);
    }

    async runDeploySuperRoot(input: SuperRootOwnerDeploySuperRootInput, options?: RunHelperOptions): Promise<RunHelperResult<SuperRootOwnerDeploySuperRootOutput>> {
        return await runHelper(this, "deploySuperRoot", input, options);
    }

    async deploySuperRoot(input: SuperRootOwnerDeploySuperRootInput): Promise<RunLocalHelperResult<SuperRootOwnerDeploySuperRootOutput>> {
        return await runLocalHelper(this, "deploySuperRoot", input);
    }

    async runUpdate(input: SuperRootOwnerUpdateInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "update", input, options);
    }

    async update(input: SuperRootOwnerUpdateInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "update", input);
    }

    async runRelease(input: SuperRootOwnerReleaseInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "release", input, options);
    }

    async release(input: SuperRootOwnerReleaseInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "release", input);
    }

    async runAddWrapperType(input: SuperRootOwnerAddWrapperTypeInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "addWrapperType", input, options);
    }

    async addWrapperType(input: SuperRootOwnerAddWrapperTypeInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "addWrapperType", input);
    }

    async runAddWrapper(input: SuperRootOwnerAddWrapperInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "addWrapper", input, options);
    }

    async addWrapper(input: SuperRootOwnerAddWrapperInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "addWrapper", input);
    }

    async runAddXchgPair(input: SuperRootOwnerAddXchgPairInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "addXchgPair", input, options);
    }

    async addXchgPair(input: SuperRootOwnerAddXchgPairInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "addXchgPair", input);
    }

    async runUnlistWrapper(input: SuperRootOwnerUnlistWrapperInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "unlistWrapper", input, options);
    }

    async unlistWrapper(input: SuperRootOwnerUnlistWrapperInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "unlistWrapper", input);
    }

    async runUnlistXchgPair(input: SuperRootOwnerUnlistXchgPairInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "unlistXchgPair", input, options);
    }

    async unlistXchgPair(input: SuperRootOwnerUnlistXchgPairInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "unlistXchgPair", input);
    }

    async runUpgradeBroxusWrapperWallet(input: SuperRootOwnerUpgradeBroxusWrapperWalletInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "upgradeBroxusWrapperWallet", input, options);
    }

    async upgradeBroxusWrapperWallet(input: SuperRootOwnerUpgradeBroxusWrapperWalletInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "upgradeBroxusWrapperWallet", input);
    }

    async runDeployWrappersConfig(input: SuperRootOwnerDeployWrappersConfigInput, options?: RunHelperOptions): Promise<RunHelperResult<SuperRootOwnerDeployWrappersConfigOutput>> {
        return await runHelper(this, "deployWrappersConfig", input, options);
    }

    async deployWrappersConfig(input: SuperRootOwnerDeployWrappersConfigInput): Promise<RunLocalHelperResult<SuperRootOwnerDeployWrappersConfigOutput>> {
        return await runLocalHelper(this, "deployWrappersConfig", input);
    }

    async runDeployFlex(input: SuperRootOwnerDeployFlexInput, options?: RunHelperOptions): Promise<RunHelperResult<SuperRootOwnerDeployFlexOutput>> {
        return await runHelper(this, "deployFlex", input, options);
    }

    async deployFlex(input: SuperRootOwnerDeployFlexInput): Promise<RunLocalHelperResult<SuperRootOwnerDeployFlexOutput>> {
        return await runLocalHelper(this, "deployFlex", input);
    }

    async runDeployUserDataConfig(input: SuperRootOwnerDeployUserDataConfigInput, options?: RunHelperOptions): Promise<RunHelperResult<SuperRootOwnerDeployUserDataConfigOutput>> {
        return await runHelper(this, "deployUserDataConfig", input, options);
    }

    async deployUserDataConfig(input: SuperRootOwnerDeployUserDataConfigInput): Promise<RunLocalHelperResult<SuperRootOwnerDeployUserDataConfigOutput>> {
        return await runLocalHelper(this, "deployUserDataConfig", input);
    }

    async runCloneWrappersConfig(input: SuperRootOwnerCloneWrappersConfigInput, options?: RunHelperOptions): Promise<RunHelperResult<SuperRootOwnerCloneWrappersConfigOutput>> {
        return await runHelper(this, "cloneWrappersConfig", input, options);
    }

    async cloneWrappersConfig(input: SuperRootOwnerCloneWrappersConfigInput): Promise<RunLocalHelperResult<SuperRootOwnerCloneWrappersConfigOutput>> {
        return await runLocalHelper(this, "cloneWrappersConfig", input);
    }

    async runSetFlags(input: SuperRootOwnerSetFlagsInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "setFlags", input, options);
    }

    async setFlags(input: SuperRootOwnerSetFlagsInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "setFlags", input);
    }

    async runTransfer(input: SuperRootOwnerTransferInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "transfer", input, options);
    }

    async transfer(input: SuperRootOwnerTransferInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "transfer", input);
    }

    async runTransferReserveTokens(input: SuperRootOwnerTransferReserveTokensInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "transferReserveTokens", input, options);
    }

    async transferReserveTokens(input: SuperRootOwnerTransferReserveTokensInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "transferReserveTokens", input);
    }

    async runSetOwner(input: SuperRootOwnerSetOwnerInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "setOwner", input, options);
    }

    async setOwner(input: SuperRootOwnerSetOwnerInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "setOwner", input);
    }

    async runSetUpdateTeam(input: SuperRootOwnerSetUpdateTeamInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "setUpdateTeam", input, options);
    }

    async setUpdateTeam(input: SuperRootOwnerSetUpdateTeamInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "setUpdateTeam", input);
    }

    async runSetNextSuperRoot(input: SuperRootOwnerSetNextSuperRootInput, options?: RunHelperOptions): Promise<RunHelperResult<void>> {
        return await runHelper(this, "setNextSuperRoot", input, options);
    }

    async setNextSuperRoot(input: SuperRootOwnerSetNextSuperRootInput): Promise<RunLocalHelperResult<void>> {
        return await runLocalHelper(this, "setNextSuperRoot", input);
    }

    async runGetDetails(options?: RunHelperOptions): Promise<RunHelperResult<SuperRootOwnerGetDetailsOutput>> {
        return await runHelper(this, "getDetails", {}, options);
    }

    async getDetails(): Promise<RunLocalHelperResult<SuperRootOwnerGetDetailsOutput>> {
        return await runLocalHelper(this, "getDetails", {});
    }

}

