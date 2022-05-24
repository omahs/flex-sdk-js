
import { Account, AccountOptions } from "@eversdk/appkit";
import { AbiContract } from "@eversdk/core";
import { 
    deployHelper,
    runHelper, 
    runLocalHelper, 
    Transaction, 
    ContractPackageEx, 
    Log, 
} from "../helpers";
export type FlexClientDeployPriceXchgInput = {
    sell: boolean /* bool */,
    immediate_client: boolean /* bool */,
    post_order: boolean /* bool */,
    price_num: string | number | bigint /* uint128 */,
    amount: string | number | bigint /* uint128 */,
    lend_amount: string | number | bigint /* uint128 */,
    lend_finish_time: number /* uint32 */,
    evers: string | number | bigint /* uint128 */,
    unsalted_price_code: string /* cell */,
    price_salt: string /* cell */,
    my_tip3_addr: string /* address */,
    user_id: string | number | bigint /* uint256 */,
    order_id: string | number | bigint /* uint256 */,
};

export type FlexClientDeployPriceXchgOutput = {
    value0: string /* address */,
};

export type FlexClientCancelXchgOrderInput = {
    sell: boolean /* bool */,
    price_num: string | number | bigint /* uint128 */,
    value: string | number | bigint /* uint128 */,
    salted_price_code: string /* cell */,
    user_id?: string | number | bigint /* optional(uint256) */,
    order_id?: string | number | bigint /* optional(uint256) */,
};

export type FlexClientTransferInput = {
    dest: string /* address */,
    value: string | number | bigint /* uint128 */,
    bounce: boolean /* bool */,
};

export type FlexClientTransferTokensInput = {
    src: string /* address */,
    dst: {
        pubkey: string | number | bigint /* uint256 */,
        owner?: string /* optional(address) */,
    } /* tuple */,
    tokens: string | number | bigint /* uint128 */,
    evers: string | number | bigint /* uint128 */,
    keep_evers: string | number | bigint /* uint128 */,
};

export type FlexClientDeployEmptyFlexWalletInput = {
    pubkey: string | number | bigint /* uint256 */,
    evers_to_wallet: string | number | bigint /* uint128 */,
    tip3cfg: {
        name: string /* string */,
        symbol: string /* string */,
        decimals: number /* uint8 */,
        root_pubkey: string | number | bigint /* uint256 */,
        root_address: string /* address */,
    } /* tuple */,
    trader: string | number | bigint /* uint256 */,
    flex_wallet_code: string /* cell */,
};

export type FlexClientDeployEmptyFlexWalletOutput = {
    value0: string /* address */,
};

export type FlexClientDeployIndexInput = {
    user_id: string | number | bigint /* uint256 */,
    lend_pubkey: string | number | bigint /* uint256 */,
    name: string /* string */,
    evers_all: string | number | bigint /* uint128 */,
    evers_to_auth_idx: string | number | bigint /* uint128 */,
    refill_wallet: string | number | bigint /* uint128 */,
    min_refill: string | number | bigint /* uint128 */,
};

export type FlexClientReLendIndexInput = {
    user_id: string | number | bigint /* uint256 */,
    new_lend_pubkey: string | number | bigint /* uint256 */,
    wallets: string[] /* address[] */,
    evers_relend_call: string | number | bigint /* uint128 */,
    evers_each_wallet_call: string | number | bigint /* uint128 */,
    evers_to_remove: string | number | bigint /* uint128 */,
    evers_to_auth_idx: string | number | bigint /* uint128 */,
};

export type FlexClientDestroyIndexInput = {
    user_id: string | number | bigint /* uint256 */,
    evers: string | number | bigint /* uint128 */,
};

export type FlexClientBurnWalletInput = {
    evers_value: string | number | bigint /* uint128 */,
    out_pubkey: string | number | bigint /* uint256 */,
    out_owner?: string /* optional(address) */,
    my_tip3_addr: string /* address */,
};

export type FlexClientUnwrapWalletInput = {
    evers_value: string | number | bigint /* uint128 */,
    out_pubkey: string | number | bigint /* uint256 */,
    out_owner?: string /* optional(address) */,
    my_tip3_addr: string /* address */,
    tokens: string | number | bigint /* uint128 */,
};

export type FlexClientBindWalletInput = {
    evers: string | number | bigint /* uint128 */,
    my_tip3_addr: string /* address */,
    set_binding: boolean /* bool */,
    binding?: {
        flex: string /* address */,
        unsalted_price_code_hash: string | number | bigint /* uint256 */,
    } /* optional(tuple) */,
    set_trader: boolean /* bool */,
    trader?: string | number | bigint /* optional(uint256) */,
};

export type FlexClientOnTip3TransferInput = {
    _answer_id: number /* uint32 */,
    balance: string | number | bigint /* uint128 */,
    new_tokens: string | number | bigint /* uint128 */,
    evers_balance: string | number | bigint /* uint128 */,
    tip3cfg: {
        name: string /* string */,
        symbol: string /* string */,
        decimals: number /* uint8 */,
        root_pubkey: string | number | bigint /* uint256 */,
        root_address: string /* address */,
    } /* tuple */,
    sender?: {
        pubkey: string | number | bigint /* uint256 */,
        owner?: string /* optional(address) */,
    } /* optional(tuple) */,
    receiver: {
        pubkey: string | number | bigint /* uint256 */,
        owner?: string /* optional(address) */,
    } /* tuple */,
    payload: string /* cell */,
    answer_addr: string /* address */,
};

export type FlexClientUpgradeInput = {
    request_evers: string | number | bigint /* uint128 */,
    user_data_cfg: string /* address */,
};

export type FlexClientGetPayloadForDeployInternalWalletInput = {
    owner_pubkey: string | number | bigint /* uint256 */,
    owner_addr?: string /* optional(address) */,
    evers: string | number | bigint /* uint128 */,
    keep_evers: string | number | bigint /* uint128 */,
};

export type FlexClientGetPayloadForDeployInternalWalletOutput = {
    value0: string /* cell */,
};

export type FlexClientGetPriceXchgAddressInput = {
    price_num: string | number | bigint /* uint128 */,
    salted_price_code: string /* cell */,
};

export type FlexClientGetPriceXchgAddressOutput = {
    value0: string /* address */,
};

export type FlexClientGetUserIdIndexInput = {
    user_id: string | number | bigint /* uint256 */,
};

export type FlexClientGetUserIdIndexOutput = {
    value0: string /* address */,
};

export type FlexClientGetDetailsOutput = {
    owner: string /* uint256 */,
    triplet: {
        wallet: number /* uint32 */,
        exchange: number /* uint32 */,
        user: number /* uint32 */,
    } /* tuple */,
    ex_triplet?: {
        wallet: number /* uint32 */,
        exchange: number /* uint32 */,
        user: number /* uint32 */,
    } /* optional(tuple) */,
    auth_index_code: string /* cell */,
    user_id_index_code: string /* cell */,
};


export class FlexClientAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"deployPriceXchg","inputs":[{"name":"sell","type":"bool"},{"name":"immediate_client","type":"bool"},{"name":"post_order","type":"bool"},{"name":"price_num","type":"uint128"},{"name":"amount","type":"uint128"},{"name":"lend_amount","type":"uint128"},{"name":"lend_finish_time","type":"uint32"},{"name":"evers","type":"uint128"},{"name":"unsalted_price_code","type":"cell"},{"name":"price_salt","type":"cell"},{"name":"my_tip3_addr","type":"address"},{"name":"user_id","type":"uint256"},{"name":"order_id","type":"uint256"}],"outputs":[{"name":"value0","type":"address"}],"id":"0xa"},{"name":"cancelXchgOrder","inputs":[{"name":"sell","type":"bool"},{"name":"price_num","type":"uint128"},{"name":"value","type":"uint128"},{"name":"salted_price_code","type":"cell"},{"name":"user_id","type":"optional(uint256)"},{"name":"order_id","type":"optional(uint256)"}],"outputs":[],"id":"0xb"},{"name":"transfer","inputs":[{"name":"dest","type":"address"},{"name":"value","type":"uint128"},{"name":"bounce","type":"bool"}],"outputs":[],"id":"0xc"},{"name":"transferTokens","inputs":[{"name":"src","type":"address"},{"components":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"name":"dst","type":"tuple"},{"name":"tokens","type":"uint128"},{"name":"evers","type":"uint128"},{"name":"keep_evers","type":"uint128"}],"outputs":[],"id":"0xd"},{"name":"deployEmptyFlexWallet","inputs":[{"name":"pubkey","type":"uint256"},{"name":"evers_to_wallet","type":"uint128"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"tip3cfg","type":"tuple"},{"name":"trader","type":"uint256"},{"name":"flex_wallet_code","type":"cell"}],"outputs":[{"name":"value0","type":"address"}],"id":"0xe"},{"name":"deployIndex","inputs":[{"name":"user_id","type":"uint256"},{"name":"lend_pubkey","type":"uint256"},{"name":"name","type":"string"},{"name":"evers_all","type":"uint128"},{"name":"evers_to_auth_idx","type":"uint128"},{"name":"refill_wallet","type":"uint128"},{"name":"min_refill","type":"uint128"}],"outputs":[],"id":"0xf"},{"name":"reLendIndex","inputs":[{"name":"user_id","type":"uint256"},{"name":"new_lend_pubkey","type":"uint256"},{"name":"wallets","type":"address[]"},{"name":"evers_relend_call","type":"uint128"},{"name":"evers_each_wallet_call","type":"uint128"},{"name":"evers_to_remove","type":"uint128"},{"name":"evers_to_auth_idx","type":"uint128"}],"outputs":[],"id":"0x10"},{"name":"destroyIndex","inputs":[{"name":"user_id","type":"uint256"},{"name":"evers","type":"uint128"}],"outputs":[],"id":"0x11"},{"name":"burnWallet","inputs":[{"name":"evers_value","type":"uint128"},{"name":"out_pubkey","type":"uint256"},{"name":"out_owner","type":"optional(address)"},{"name":"my_tip3_addr","type":"address"}],"outputs":[],"id":"0x12"},{"name":"unwrapWallet","inputs":[{"name":"evers_value","type":"uint128"},{"name":"out_pubkey","type":"uint256"},{"name":"out_owner","type":"optional(address)"},{"name":"my_tip3_addr","type":"address"},{"name":"tokens","type":"uint128"}],"outputs":[],"id":"0x13"},{"name":"bindWallet","inputs":[{"name":"evers","type":"uint128"},{"name":"my_tip3_addr","type":"address"},{"name":"set_binding","type":"bool"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"optional(tuple)"},{"name":"set_trader","type":"bool"},{"name":"trader","type":"optional(uint256)"}],"outputs":[],"id":"0x14"},{"name":"onTip3Transfer","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"balance","type":"uint128"},{"name":"new_tokens","type":"uint128"},{"name":"evers_balance","type":"uint128"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"tip3cfg","type":"tuple"},{"components":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"name":"sender","type":"optional(tuple)"},{"components":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"name":"receiver","type":"tuple"},{"name":"payload","type":"cell"},{"name":"answer_addr","type":"address"}],"outputs":[],"id":"0xca"},{"name":"upgrade","inputs":[{"name":"request_evers","type":"uint128"},{"name":"user_data_cfg","type":"address"}],"outputs":[],"id":"0x15"},{"name":"getPayloadForDeployInternalWallet","inputs":[{"name":"owner_pubkey","type":"uint256"},{"name":"owner_addr","type":"optional(address)"},{"name":"evers","type":"uint128"},{"name":"keep_evers","type":"uint128"}],"outputs":[{"name":"value0","type":"cell"}],"id":"0x16"},{"name":"getPriceXchgAddress","inputs":[{"name":"price_num","type":"uint128"},{"name":"salted_price_code","type":"cell"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x17"},{"name":"getUserIdIndex","inputs":[{"name":"user_id","type":"uint256"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x18"},{"name":"getDetails","inputs":[],"outputs":[{"name":"owner","type":"uint256"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"triplet","type":"tuple"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"ex_triplet","type":"optional(tuple)"},{"name":"auth_index_code","type":"cell"},{"name":"user_id_index_code","type":"cell"}],"id":"0x19"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"__replay","type":"uint64"},{"name":"__await_next_id","type":"uint32"},{"name":"__await_dict","type":"optional(cell)"},{"name":"owner_","type":"uint256"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"triplet_","type":"tuple"},{"components":[{"name":"wallet","type":"uint32"},{"name":"exchange","type":"uint32"},{"name":"user","type":"uint32"}],"name":"ex_triplet_","type":"tuple"},{"name":"auth_index_code_","type":"optional(cell)"},{"name":"user_id_index_code_","type":"optional(cell)"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding_","type":"optional(tuple)"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "ab1274cbd464f9ccc2ea97c50e19afbf68cff76d2a4b2ac70cc676565d635753",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(FlexClientAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "", {});
    }

    async runDeployPriceXchg(input: FlexClientDeployPriceXchgInput): Promise<{
        transaction: Transaction,
        output: FlexClientDeployPriceXchgOutput,
    }> {
        return await runHelper(this, "deployPriceXchg", input);
    }

    async deployPriceXchg(input: FlexClientDeployPriceXchgInput): Promise<{
        transaction: Transaction,
        output: FlexClientDeployPriceXchgOutput,
    }> {
        return await runLocalHelper(this, "deployPriceXchg", input);
    }

    async runCancelXchgOrder(input: FlexClientCancelXchgOrderInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "cancelXchgOrder", input);
    }

    async cancelXchgOrder(input: FlexClientCancelXchgOrderInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "cancelXchgOrder", input);
    }

    async runTransfer(input: FlexClientTransferInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "transfer", input);
    }

    async transfer(input: FlexClientTransferInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "transfer", input);
    }

    async runTransferTokens(input: FlexClientTransferTokensInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "transferTokens", input);
    }

    async transferTokens(input: FlexClientTransferTokensInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "transferTokens", input);
    }

    async runDeployEmptyFlexWallet(input: FlexClientDeployEmptyFlexWalletInput): Promise<{
        transaction: Transaction,
        output: FlexClientDeployEmptyFlexWalletOutput,
    }> {
        return await runHelper(this, "deployEmptyFlexWallet", input);
    }

    async deployEmptyFlexWallet(input: FlexClientDeployEmptyFlexWalletInput): Promise<{
        transaction: Transaction,
        output: FlexClientDeployEmptyFlexWalletOutput,
    }> {
        return await runLocalHelper(this, "deployEmptyFlexWallet", input);
    }

    async runDeployIndex(input: FlexClientDeployIndexInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "deployIndex", input);
    }

    async deployIndex(input: FlexClientDeployIndexInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "deployIndex", input);
    }

    async runReLendIndex(input: FlexClientReLendIndexInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "reLendIndex", input);
    }

    async reLendIndex(input: FlexClientReLendIndexInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "reLendIndex", input);
    }

    async runDestroyIndex(input: FlexClientDestroyIndexInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "destroyIndex", input);
    }

    async destroyIndex(input: FlexClientDestroyIndexInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "destroyIndex", input);
    }

    async runBurnWallet(input: FlexClientBurnWalletInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "burnWallet", input);
    }

    async burnWallet(input: FlexClientBurnWalletInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "burnWallet", input);
    }

    async runUnwrapWallet(input: FlexClientUnwrapWalletInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "unwrapWallet", input);
    }

    async unwrapWallet(input: FlexClientUnwrapWalletInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "unwrapWallet", input);
    }

    async runBindWallet(input: FlexClientBindWalletInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "bindWallet", input);
    }

    async bindWallet(input: FlexClientBindWalletInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "bindWallet", input);
    }

    async runOnTip3Transfer(input: FlexClientOnTip3TransferInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "onTip3Transfer", input);
    }

    async onTip3Transfer(input: FlexClientOnTip3TransferInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "onTip3Transfer", input);
    }

    async runUpgrade(input: FlexClientUpgradeInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "upgrade", input);
    }

    async upgrade(input: FlexClientUpgradeInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "upgrade", input);
    }

    async runGetPayloadForDeployInternalWallet(input: FlexClientGetPayloadForDeployInternalWalletInput): Promise<{
        transaction: Transaction,
        output: FlexClientGetPayloadForDeployInternalWalletOutput,
    }> {
        return await runHelper(this, "getPayloadForDeployInternalWallet", input);
    }

    async getPayloadForDeployInternalWallet(input: FlexClientGetPayloadForDeployInternalWalletInput): Promise<{
        transaction: Transaction,
        output: FlexClientGetPayloadForDeployInternalWalletOutput,
    }> {
        return await runLocalHelper(this, "getPayloadForDeployInternalWallet", input);
    }

    async runGetPriceXchgAddress(input: FlexClientGetPriceXchgAddressInput): Promise<{
        transaction: Transaction,
        output: FlexClientGetPriceXchgAddressOutput,
    }> {
        return await runHelper(this, "getPriceXchgAddress", input);
    }

    async getPriceXchgAddress(input: FlexClientGetPriceXchgAddressInput): Promise<{
        transaction: Transaction,
        output: FlexClientGetPriceXchgAddressOutput,
    }> {
        return await runLocalHelper(this, "getPriceXchgAddress", input);
    }

    async runGetUserIdIndex(input: FlexClientGetUserIdIndexInput): Promise<{
        transaction: Transaction,
        output: FlexClientGetUserIdIndexOutput,
    }> {
        return await runHelper(this, "getUserIdIndex", input);
    }

    async getUserIdIndex(input: FlexClientGetUserIdIndexInput): Promise<{
        transaction: Transaction,
        output: FlexClientGetUserIdIndexOutput,
    }> {
        return await runLocalHelper(this, "getUserIdIndex", input);
    }

    async runGetDetails(): Promise<{
        transaction: Transaction,
        output: FlexClientGetDetailsOutput,
    }> {
        return await runHelper(this, "getDetails", {});
    }

    async getDetails(): Promise<{
        transaction: Transaction,
        output: FlexClientGetDetailsOutput,
    }> {
        return await runLocalHelper(this, "getDetails", {});
    }

}

