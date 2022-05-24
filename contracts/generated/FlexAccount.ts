
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
export type FlexOnDeployInput = {
    flex_keep_evers: string | number | bigint /* uint128 */,
    evers: {
        deploy: string | number | bigint /* uint128 */,
        setnext: string | number | bigint /* uint128 */,
        pair_keep: string | number | bigint /* uint128 */,
    } /* tuple */,
    old_flex?: string /* optional(address) */,
};

export type FlexAddXchgPairInput = {
    _answer_id: number /* uint32 */,
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

export type FlexAddXchgPairOutput = {
    value0: string /* address */,
};

export type FlexUnlistXchgPairInput = {
    pair: string /* address */,
};

export type FlexRequestPairsInput = {
    _answer_id: number /* uint32 */,
};

export type FlexRequestPairsOutput = {
    first_pair?: string /* optional(address) */,
    last_pair?: string /* optional(address) */,
};

export type FlexGetConfigOutput = {
    super_root: string /* address */,
    ev_cfg: {
        transfer_tip3: string /* uint128 */,
        return_ownership: string /* uint128 */,
        order_answer: string /* uint128 */,
        process_queue: string /* uint128 */,
        send_notify: string /* uint128 */,
        dest_wallet_keep_evers: string /* uint128 */,
    } /* tuple */,
    deals_limit: number /* uint8 */,
    xchg_pair_code: string /* cell */,
    xchg_price_code: string /* cell */,
};

export type FlexGetDetailsOutput = {
    xchg_pair_code: string /* cell */,
    unsalted_price_code_hash: string /* uint256 */,
    first_pair?: string /* optional(address) */,
    last_pair?: string /* optional(address) */,
    pairs_count: number /* uint32 */,
};

export type FlexGetXchgTradingPairInput = {
    tip3_major_root: string /* address */,
    tip3_minor_root: string /* address */,
};

export type FlexGetXchgTradingPairOutput = {
    value0: string /* address */,
};

export type FlexCalcLendTokensForOrderInput = {
    sell: boolean /* bool */,
    major_tokens: string | number | bigint /* uint128 */,
    price: {
        num: string | number | bigint /* uint128 */,
        denum: string | number | bigint /* uint128 */,
    } /* tuple */,
};

export type FlexCalcLendTokensForOrderOutput = {
    value0: string /* uint128 */,
};


export class FlexAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"onDeploy","inputs":[{"name":"flex_keep_evers","type":"uint128"},{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"pair_keep","type":"uint128"}],"name":"evers","type":"tuple"},{"name":"old_flex","type":"optional(address)"}],"outputs":[],"id":"0x100"},{"name":"addXchgPair","inputs":[{"name":"_answer_id","type":"uint32"},{"components":[{"name":"deploy","type":"uint128"},{"name":"setnext","type":"uint128"},{"name":"pair_keep","type":"uint128"}],"name":"evers","type":"tuple"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"major_tip3cfg","type":"tuple"},{"components":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"},{"name":"root_pubkey","type":"uint256"},{"name":"root_address","type":"address"}],"name":"minor_tip3cfg","type":"tuple"},{"name":"min_amount","type":"uint128"},{"name":"minmove","type":"uint128"},{"name":"price_denum","type":"uint128"},{"name":"notify_addr","type":"address"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x200"},{"name":"unlistXchgPair","inputs":[{"name":"pair","type":"address"}],"outputs":[]},{"name":"requestPairs","inputs":[{"name":"_answer_id","type":"uint32"}],"outputs":[{"name":"first_pair","type":"optional(address)"},{"name":"last_pair","type":"optional(address)"}],"id":"0x300"},{"name":"getConfig","inputs":[],"outputs":[{"name":"super_root","type":"address"},{"components":[{"name":"transfer_tip3","type":"uint128"},{"name":"return_ownership","type":"uint128"},{"name":"order_answer","type":"uint128"},{"name":"process_queue","type":"uint128"},{"name":"send_notify","type":"uint128"},{"name":"dest_wallet_keep_evers","type":"uint128"}],"name":"ev_cfg","type":"tuple"},{"name":"deals_limit","type":"uint8"},{"name":"xchg_pair_code","type":"cell"},{"name":"xchg_price_code","type":"cell"}],"id":"0x14"},{"name":"getDetails","inputs":[],"outputs":[{"name":"xchg_pair_code","type":"cell"},{"name":"unsalted_price_code_hash","type":"uint256"},{"name":"first_pair","type":"optional(address)"},{"name":"last_pair","type":"optional(address)"},{"name":"pairs_count","type":"uint32"}],"id":"0x15"},{"name":"getXchgTradingPair","inputs":[{"name":"tip3_major_root","type":"address"},{"name":"tip3_minor_root","type":"address"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x16"},{"name":"calcLendTokensForOrder","inputs":[{"name":"sell","type":"bool"},{"name":"major_tokens","type":"uint128"},{"components":[{"name":"num","type":"uint128"},{"name":"denum","type":"uint128"}],"name":"price","type":"tuple"}],"outputs":[{"name":"value0","type":"uint128"}],"id":"0x17"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"__await_next_id","type":"uint32"},{"name":"__await_dict","type":"optional(cell)"},{"name":"exchange_version_","type":"uint32"},{"name":"workchain_id_","type":"int8"},{"name":"xchg_pair_code_","type":"optional(cell)"},{"name":"first_pair_","type":"optional(address)"},{"name":"last_pair_","type":"optional(address)"},{"name":"pairs_count_","type":"uint32"},{"name":"flex_keep_evers_","type":"uint128"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "b7c03e1a1db8e9b7fc4837d106b4110c12c3ff00b66a0c24a95f26703a1f5248",
    };
    log: Log;
    constructor(
        options: AccountOptions & {
            log?: Log
        }
    ) {
        super(FlexAccount.package, options);
        this.log = options.log ?? Log.default;
    }
    async deployContract(): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "", {});
    }

    async runOnDeploy(input: FlexOnDeployInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "onDeploy", input);
    }

    async onDeploy(input: FlexOnDeployInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "onDeploy", input);
    }

    async runAddXchgPair(input: FlexAddXchgPairInput): Promise<{
        transaction: Transaction,
        output: FlexAddXchgPairOutput,
    }> {
        return await runHelper(this, "addXchgPair", input);
    }

    async addXchgPair(input: FlexAddXchgPairInput): Promise<{
        transaction: Transaction,
        output: FlexAddXchgPairOutput,
    }> {
        return await runLocalHelper(this, "addXchgPair", input);
    }

    async runUnlistXchgPair(input: FlexUnlistXchgPairInput): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "unlistXchgPair", input);
    }

    async unlistXchgPair(input: FlexUnlistXchgPairInput): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "unlistXchgPair", input);
    }

    async runRequestPairs(input: FlexRequestPairsInput): Promise<{
        transaction: Transaction,
        output: FlexRequestPairsOutput,
    }> {
        return await runHelper(this, "requestPairs", input);
    }

    async requestPairs(input: FlexRequestPairsInput): Promise<{
        transaction: Transaction,
        output: FlexRequestPairsOutput,
    }> {
        return await runLocalHelper(this, "requestPairs", input);
    }

    async runGetConfig(): Promise<{
        transaction: Transaction,
        output: FlexGetConfigOutput,
    }> {
        return await runHelper(this, "getConfig", {});
    }

    async getConfig(): Promise<{
        transaction: Transaction,
        output: FlexGetConfigOutput,
    }> {
        return await runLocalHelper(this, "getConfig", {});
    }

    async runGetDetails(): Promise<{
        transaction: Transaction,
        output: FlexGetDetailsOutput,
    }> {
        return await runHelper(this, "getDetails", {});
    }

    async getDetails(): Promise<{
        transaction: Transaction,
        output: FlexGetDetailsOutput,
    }> {
        return await runLocalHelper(this, "getDetails", {});
    }

    async runGetXchgTradingPair(input: FlexGetXchgTradingPairInput): Promise<{
        transaction: Transaction,
        output: FlexGetXchgTradingPairOutput,
    }> {
        return await runHelper(this, "getXchgTradingPair", input);
    }

    async getXchgTradingPair(input: FlexGetXchgTradingPairInput): Promise<{
        transaction: Transaction,
        output: FlexGetXchgTradingPairOutput,
    }> {
        return await runLocalHelper(this, "getXchgTradingPair", input);
    }

    async runCalcLendTokensForOrder(input: FlexCalcLendTokensForOrderInput): Promise<{
        transaction: Transaction,
        output: FlexCalcLendTokensForOrderOutput,
    }> {
        return await runHelper(this, "calcLendTokensForOrder", input);
    }

    async calcLendTokensForOrder(input: FlexCalcLendTokensForOrderInput): Promise<{
        transaction: Transaction,
        output: FlexCalcLendTokensForOrderOutput,
    }> {
        return await runLocalHelper(this, "calcLendTokensForOrder", input);
    }

}

