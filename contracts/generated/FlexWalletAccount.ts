
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
export type FlexWalletTransferInput = {
    _answer_id: number /* uint32 */,
    answer_addr?: string /* optional(address) */,
    to: string /* address */,
    tokens: string | number | bigint /* uint128 */,
    evers: string | number | bigint /* uint128 */,
    return_ownership: string | number | bigint /* uint128 */,
    notify_payload?: string /* optional(cell) */,
};

export type FlexWalletTransferToRecipientInput = {
    _answer_id: number /* uint32 */,
    answer_addr?: string /* optional(address) */,
    to: {
        pubkey: string | number | bigint /* uint256 */,
        owner?: string /* optional(address) */,
    } /* tuple */,
    tokens: string | number | bigint /* uint128 */,
    evers: string | number | bigint /* uint128 */,
    keep_evers: string | number | bigint /* uint128 */,
    deploy: boolean /* bool */,
    return_ownership: string | number | bigint /* uint128 */,
    notify_payload?: string /* optional(cell) */,
};

export type FlexWalletBalanceInput = {
    _answer_id: number /* uint32 */,
};

export type FlexWalletBalanceOutput = {
    value0: string /* uint128 */,
};

export type FlexWalletAcceptMintInput = {
    _value: string | number | bigint /* uint128 */,
    answer_addr: string /* address */,
    keep_evers: string | number | bigint /* uint128 */,
    notify_payload?: string /* optional(cell) */,
};

export type FlexWalletAcceptTransferInput = {
    _value: string | number | bigint /* uint128 */,
    answer_addr: string /* address */,
    keep_evers: string | number | bigint /* uint128 */,
    sender_pubkey: string | number | bigint /* uint256 */,
    sender_owner?: string /* optional(address) */,
    payload?: string /* optional(cell) */,
};

export type FlexWalletBurnInput = {
    _answer_id: number /* uint32 */,
    out_pubkey: string | number | bigint /* uint256 */,
    out_owner?: string /* optional(address) */,
};

export type FlexWalletUnwrapInput = {
    _answer_id: number /* uint32 */,
    out_pubkey: string | number | bigint /* uint256 */,
    out_owner?: string /* optional(address) */,
    tokens: string | number | bigint /* uint128 */,
};

export type FlexWalletMakeOrderInput = {
    _answer_id: number /* uint32 */,
    answer_addr?: string /* optional(address) */,
    evers: string | number | bigint /* uint128 */,
    lend_balance: string | number | bigint /* uint128 */,
    lend_finish_time: number /* uint32 */,
    price_num: string | number | bigint /* uint128 */,
    unsalted_price_code: string /* cell */,
    salt: string /* cell */,
    args: {
        sell: boolean /* bool */,
        immediate_client: boolean /* bool */,
        post_order: boolean /* bool */,
        amount: string | number | bigint /* uint128 */,
        client_addr: string /* address */,
        user_id: string | number | bigint /* uint256 */,
        order_id: string | number | bigint /* uint256 */,
    } /* tuple */,
};

export type FlexWalletCancelOrderInput = {
    evers: string | number | bigint /* uint128 */,
    price: string /* address */,
    sell: boolean /* bool */,
    order_id?: string | number | bigint /* optional(uint256) */,
};

export type FlexWalletReturnOwnershipInput = {
    tokens: string | number | bigint /* uint128 */,
};

export type FlexWalletBindInput = {
    set_binding: boolean /* bool */,
    binding?: {
        flex: string /* address */,
        unsalted_price_code_hash: string | number | bigint /* uint256 */,
    } /* optional(tuple) */,
    set_trader: boolean /* bool */,
    trader?: string | number | bigint /* optional(uint256) */,
};

export type FlexWalletDetailsInput = {
    _answer_id: number /* uint32 */,
};

export type FlexWalletDetailsOutput = {
    name: string /* string */,
    symbol: string /* string */,
    decimals: number /* uint8 */,
    balance: string /* uint128 */,
    root_pubkey: string /* uint256 */,
    root_address: string /* address */,
    wallet_pubkey: string /* uint256 */,
    owner_address?: string /* optional(address) */,
    lend_pubkey?: string /* optional(uint256) */,
    lend_owners: {
        lend_key: {
            dest: {
                workchain_id: number /* int8 */,
                address: string /* uint256 */,
            } /* tuple */,
        } /* tuple */,
        lend_balance: string /* uint128 */,
        lend_finish_time: number /* uint32 */,
    }[] /* tuple[] */,
    lend_balance: string /* uint128 */,
    binding?: {
        flex: string /* address */,
        unsalted_price_code_hash: string /* uint256 */,
    } /* optional(tuple) */,
    code_hash: string /* uint256 */,
    code_depth: number /* uint16 */,
    workchain_id: number /* int8 */,
};

export type FlexWalletGetDetailsOutput = {
    name: string /* string */,
    symbol: string /* string */,
    decimals: number /* uint8 */,
    balance: string /* uint128 */,
    root_pubkey: string /* uint256 */,
    root_address: string /* address */,
    wallet_pubkey: string /* uint256 */,
    owner_address?: string /* optional(address) */,
    lend_pubkey?: string /* optional(uint256) */,
    lend_owners: {
        lend_key: {
            dest: {
                workchain_id: number /* int8 */,
                address: string /* uint256 */,
            } /* tuple */,
        } /* tuple */,
        lend_balance: string /* uint128 */,
        lend_finish_time: number /* uint32 */,
    }[] /* tuple[] */,
    lend_balance: string /* uint128 */,
    binding?: {
        flex: string /* address */,
        unsalted_price_code_hash: string /* uint256 */,
    } /* optional(tuple) */,
    code_hash: string /* uint256 */,
    code_depth: number /* uint16 */,
    workchain_id: number /* int8 */,
};

export type FlexWalletGetBalanceOutput = {
    value0: string /* uint128 */,
};


export class FlexWalletAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"transfer","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"answer_addr","type":"optional(address)"},{"name":"to","type":"address"},{"name":"tokens","type":"uint128"},{"name":"evers","type":"uint128"},{"name":"return_ownership","type":"uint128"},{"name":"notify_payload","type":"optional(cell)"}],"outputs":[],"id":"0xa"},{"name":"transferToRecipient","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"answer_addr","type":"optional(address)"},{"components":[{"name":"pubkey","type":"uint256"},{"name":"owner","type":"optional(address)"}],"name":"to","type":"tuple"},{"name":"tokens","type":"uint128"},{"name":"evers","type":"uint128"},{"name":"keep_evers","type":"uint128"},{"name":"deploy","type":"bool"},{"name":"return_ownership","type":"uint128"},{"name":"notify_payload","type":"optional(cell)"}],"outputs":[],"id":"0xb"},{"name":"balance","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"value0","type":"uint128"}],"id":"0xc"},{"name":"acceptMint","inputs":[{"name":"_value","type":"uint128"},{"name":"answer_addr","type":"address"},{"name":"keep_evers","type":"uint128"},{"name":"notify_payload","type":"optional(cell)"}],"outputs":[],"id":"0x4384f298"},{"name":"acceptTransfer","inputs":[{"name":"_value","type":"uint128"},{"name":"answer_addr","type":"address"},{"name":"keep_evers","type":"uint128"},{"name":"sender_pubkey","type":"uint256"},{"name":"sender_owner","type":"optional(address)"},{"name":"payload","type":"optional(cell)"}],"outputs":[],"id":"0x67a0b95f"},{"name":"burn","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"out_pubkey","type":"uint256"},{"name":"out_owner","type":"optional(address)"}],"outputs":[],"id":"0xe"},{"name":"unwrap","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"out_pubkey","type":"uint256"},{"name":"out_owner","type":"optional(address)"},{"name":"tokens","type":"uint128"}],"outputs":[],"id":"0xf"},{"name":"makeOrder","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"answer_addr","type":"optional(address)"},{"name":"evers","type":"uint128"},{"name":"lend_balance","type":"uint128"},{"name":"lend_finish_time","type":"uint32"},{"name":"price_num","type":"uint128"},{"name":"unsalted_price_code","type":"cell"},{"name":"salt","type":"cell"},{"components":[{"name":"sell","type":"bool"},{"name":"immediate_client","type":"bool"},{"name":"post_order","type":"bool"},{"name":"amount","type":"uint128"},{"name":"client_addr","type":"address"},{"name":"user_id","type":"uint256"},{"name":"order_id","type":"uint256"}],"name":"args","type":"tuple"}],"outputs":[],"id":"0x10"},{"name":"cancelOrder","inputs":[{"name":"evers","type":"uint128"},{"name":"price","type":"address"},{"name":"sell","type":"bool"},{"name":"order_id","type":"optional(uint256)"}],"outputs":[],"id":"0x11"},{"name":"returnOwnership","inputs":[{"name":"tokens","type":"uint128"}],"outputs":[],"id":"0x12"},{"name":"bind","inputs":[{"name":"set_binding","type":"bool"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"optional(tuple)"},{"name":"set_trader","type":"bool"},{"name":"trader","type":"optional(uint256)"}],"outputs":[],"id":"0x13"},{"name":"details","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"balance","type":"uint128"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"},{"name":"wallet_pubkey","type":"uint256"},{"name":"owner_address","type":"optional(address)"},{"name":"lend_pubkey","type":"optional(uint256)"},{"components":[{"components":[{"components":[{"name":"workchain_id","type":"int8"},{"name":"address","type":"uint256"}],"name":"dest","type":"tuple"}],"name":"lend_key","type":"tuple"},{"name":"lend_balance","type":"uint128"},{"name":"lend_finish_time","type":"uint32"}],"name":"lend_owners","type":"tuple[]"},{"name":"lend_balance","type":"uint128"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"optional(tuple)"},{"name":"code_hash","type":"uint256"},{"name":"code_depth","type":"uint16"},{"name":"workchain_id","type":"int8"}],"id":"0x14"},{"name":"getDetails","inputs":[],"outputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"balance","type":"uint128"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"},{"name":"wallet_pubkey","type":"uint256"},{"name":"owner_address","type":"optional(address)"},{"name":"lend_pubkey","type":"optional(uint256)"},{"components":[{"components":[{"components":[{"name":"workchain_id","type":"int8"},{"name":"address","type":"uint256"}],"name":"dest","type":"tuple"}],"name":"lend_key","type":"tuple"},{"name":"lend_balance","type":"uint128"},{"name":"lend_finish_time","type":"uint32"}],"name":"lend_owners","type":"tuple[]"},{"name":"lend_balance","type":"uint128"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding","type":"optional(tuple)"},{"name":"code_hash","type":"uint256"},{"name":"code_depth","type":"uint16"},{"name":"workchain_id","type":"int8"}],"id":"0x100"},{"name":"getBalance","inputs":[],"outputs":[{"name":"value0","type":"uint128"}],"id":"0x16"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"__replay","type":"uint64"},{"name":"name_","type":"string"},{"name":"symbol_","type":"string"},{"name":"decimals_","type":"uint8"},{"name":"balance_","type":"uint128"},{"name":"root_pubkey_","type":"uint256"},{"name":"root_address_","type":"address"},{"name":"wallet_pubkey_","type":"uint256"},{"name":"owner_address_","type":"optional(address)"},{"name":"lend_pubkey_","type":"optional(uint256)"},{"name":"lend_owners_","type":"optional(cell)"},{"components":[{"name":"flex","type":"address"},{"name":"unsalted_price_code_hash","type":"uint256"}],"name":"binding_","type":"optional(tuple)"},{"name":"code_hash_","type":"uint256"},{"name":"code_depth_","type":"uint16"},{"name":"workchain_id_","type":"int8"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "d950797435afa3f0298430cc402d7e3e9f78100306784fe4af943271199b22dd",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(FlexWalletAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "", {});
    }

    async runTransfer(input: FlexWalletTransferInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "transfer", input);
    }

    async transfer(input: FlexWalletTransferInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "transfer", input);
    }

    async runTransferToRecipient(input: FlexWalletTransferToRecipientInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "transferToRecipient", input);
    }

    async transferToRecipient(input: FlexWalletTransferToRecipientInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "transferToRecipient", input);
    }

    async runBalance(input: FlexWalletBalanceInput): Promise<{
        transaction: Transaction,
        output: FlexWalletBalanceOutput,
    }> {
        return await runHelper(this, "balance", input);
    }

    async balance(input: FlexWalletBalanceInput): Promise<{
        transaction: Transaction,
        output: FlexWalletBalanceOutput,
    }> {
        return await runLocalHelper(this, "balance", input);
    }

    async runAcceptMint(input: FlexWalletAcceptMintInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "acceptMint", input);
    }

    async acceptMint(input: FlexWalletAcceptMintInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "acceptMint", input);
    }

    async runAcceptTransfer(input: FlexWalletAcceptTransferInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "acceptTransfer", input);
    }

    async acceptTransfer(input: FlexWalletAcceptTransferInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "acceptTransfer", input);
    }

    async runBurn(input: FlexWalletBurnInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "burn", input);
    }

    async burn(input: FlexWalletBurnInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "burn", input);
    }

    async runUnwrap(input: FlexWalletUnwrapInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "unwrap", input);
    }

    async unwrap(input: FlexWalletUnwrapInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "unwrap", input);
    }

    async runMakeOrder(input: FlexWalletMakeOrderInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "makeOrder", input);
    }

    async makeOrder(input: FlexWalletMakeOrderInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "makeOrder", input);
    }

    async runCancelOrder(input: FlexWalletCancelOrderInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "cancelOrder", input);
    }

    async cancelOrder(input: FlexWalletCancelOrderInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "cancelOrder", input);
    }

    async runReturnOwnership(input: FlexWalletReturnOwnershipInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "returnOwnership", input);
    }

    async returnOwnership(input: FlexWalletReturnOwnershipInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "returnOwnership", input);
    }

    async runBind(input: FlexWalletBindInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "bind", input);
    }

    async bind(input: FlexWalletBindInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "bind", input);
    }

    async runDetails(input: FlexWalletDetailsInput): Promise<{
        transaction: Transaction,
        output: FlexWalletDetailsOutput,
    }> {
        return await runHelper(this, "details", input);
    }

    async details(input: FlexWalletDetailsInput): Promise<{
        transaction: Transaction,
        output: FlexWalletDetailsOutput,
    }> {
        return await runLocalHelper(this, "details", input);
    }

    async runGetDetails(): Promise<{
        transaction: Transaction,
        output: FlexWalletGetDetailsOutput,
    }> {
        return await runHelper(this, "getDetails", {});
    }

    async getDetails(): Promise<{
        transaction: Transaction,
        output: FlexWalletGetDetailsOutput,
    }> {
        return await runLocalHelper(this, "getDetails", {});
    }

    async runGetBalance(): Promise<{
        transaction: Transaction,
        output: FlexWalletGetBalanceOutput,
    }> {
        return await runHelper(this, "getBalance", {});
    }

    async getBalance_(): Promise<{
        transaction: Transaction,
        output: FlexWalletGetBalanceOutput,
    }> {
        return await runLocalHelper(this, "getBalance", {});
    }

}

