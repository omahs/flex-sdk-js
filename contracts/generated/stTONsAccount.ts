
import { Account, AccountOptions } from "@eversdk/appkit";
import { AbiContract } from "@eversdk/core";
import { deployHelper, runHelper, runLocalHelper, Transaction, ContractPackageEx } from "../helpers";

export class stTONsAccount extends Account {
    static package: ContractPackageEx = {
        abi: {"ABI version":2,"version":"2.2.0","header":["pubkey","time","expire"],"functions":[{"name":"onDeploy","inputs":[],"outputs":[],"id":"0xa"},{"name":"lendOwnership","inputs":[{"name":"_answer_id","type":"uint32"},{"name":"answer_addr","type":"address"},{"name":"evers","type":"uint128"},{"name":"dest","type":"address"},{"name":"lend_balance","type":"uint128"},{"name":"lend_finish_time","type":"uint32"},{"name":"deploy_init_cl","type":"cell"},{"name":"payload","type":"cell"}],"outputs":[],"id":"0xb"},{"name":"returnOwnership","inputs":[{"name":"tokens","type":"uint128"}],"outputs":[],"id":"0xc"},{"name":"returnStake","inputs":[{"name":"dst","type":"address"},{"name":"processing_evers","type":"uint128"}],"outputs":[],"id":"0xd"},{"name":"finalize","inputs":[{"name":"dst","type":"address"},{"name":"ignore_errors","type":"bool"}],"outputs":[],"id":"0xe"},{"name":"receiveStakeTransfer","inputs":[{"name":"source","type":"address"},{"name":"amount","type":"uint128"}],"outputs":[],"id":"0x23c4771d"},{"name":"receiveAnswer","inputs":[{"name":"errcode","type":"uint32"},{"name":"comment","type":"uint64"}],"outputs":[],"id":"0x3f109e44"},{"name":"getDetails","inputs":[],"outputs":[{"name":"owner_pubkey","type":"uint256"},{"name":"owner_address","type":"address"},{"name":"depool","type":"address"},{"name":"depool_pubkey","type":"uint256"},{"name":"balance","type":"uint128"},{"components":[{"name":"lend_addr","type":"address"},{"name":"lend_balance","type":"uint128"},{"name":"lend_finish_time","type":"uint32"}],"name":"lend_ownership","type":"tuple[]"},{"name":"lend_balance","type":"uint128"},{"name":"transferring_stake_back","type":"bool"},{"name":"last_depool_error","type":"uint8"}],"id":"0xf"},{"name":"calcStTONsAddr","inputs":[{"name":"code","type":"cell"},{"name":"owner_pubkey","type":"uint256"},{"name":"owner_address","type":"optional(address)"},{"name":"depool","type":"address"},{"name":"depool_pubkey","type":"uint256"}],"outputs":[{"name":"value0","type":"address"}],"id":"0x10"}],"fields":[{"name":"__uninitialized","type":"bool"},{"name":"owner_pubkey_","type":"uint256"},{"name":"owner_address_","type":"optional(address)"},{"components":[{"name":"addr_","type":"address"}],"name":"depool_","type":"tuple"},{"name":"depool_pubkey_","type":"uint256"},{"name":"balance_","type":"uint128"},{"name":"lend_ownership_","type":"optional(cell)"},{"name":"transferring_stake_back_","type":"bool"},{"name":"last_depool_error_","type":"uint8"}],"events":[]} as unknown as AbiContract,
        tvc: "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",
        code: "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",
        codeHash: "8b7b278db12d2a722fc22eef1831790254dac9c68e99aea57a0dd92b42647925",
    };
    
    constructor(options: AccountOptions) {
        super(stTONsAccount.package, options);
    }
    async deployContract(): Promise<{
        transaction: Transaction,
    }> {
        return await deployHelper(this, "", {});
    }

    async runOnDeploy(): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "onDeploy", {});
    }

    async runLocalOnDeploy(): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "onDeploy", {});
    }

    async runLendOwnership(input: {
        _answer_id: number// uint32,
        answer_addr: string// address,
        evers: string | number | bigint// uint128,
        dest: string// address,
        lend_balance: string | number | bigint// uint128,
        lend_finish_time: number// uint32,
        deploy_init_cl: string// cell,
        payload: string// cell,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "lendOwnership", input);
    }

    async runLocalLendOwnership(input: {
        _answer_id: number// uint32,
        answer_addr: string// address,
        evers: string | number | bigint// uint128,
        dest: string// address,
        lend_balance: string | number | bigint// uint128,
        lend_finish_time: number// uint32,
        deploy_init_cl: string// cell,
        payload: string// cell,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "lendOwnership", input);
    }

    async runReturnOwnership(input: {
        tokens: string | number | bigint// uint128,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "returnOwnership", input);
    }

    async runLocalReturnOwnership(input: {
        tokens: string | number | bigint// uint128,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "returnOwnership", input);
    }

    async runReturnStake(input: {
        dst: string// address,
        processing_evers: string | number | bigint// uint128,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "returnStake", input);
    }

    async runLocalReturnStake(input: {
        dst: string// address,
        processing_evers: string | number | bigint// uint128,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "returnStake", input);
    }

    async runFinalize(input: {
        dst: string// address,
        ignore_errors: boolean// bool,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "finalize", input);
    }

    async runLocalFinalize(input: {
        dst: string// address,
        ignore_errors: boolean// bool,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "finalize", input);
    }

    async runReceiveStakeTransfer(input: {
        source: string// address,
        amount: string | number | bigint// uint128,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "receiveStakeTransfer", input);
    }

    async runLocalReceiveStakeTransfer(input: {
        source: string// address,
        amount: string | number | bigint// uint128,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "receiveStakeTransfer", input);
    }

    async runReceiveAnswer(input: {
        errcode: number// uint32,
        comment: string | number | bigint// uint64,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runHelper(this, "receiveAnswer", input);
    }

    async runLocalReceiveAnswer(input: {
        errcode: number// uint32,
        comment: string | number | bigint// uint64,
    }): Promise<{
        transaction: Transaction,
    }> {
        return await runLocalHelper(this, "receiveAnswer", input);
    }

    async runGetDetails(): Promise<{
        transaction: Transaction,
        output: {
            owner_pubkey: string// uint256,
            owner_address: string// address,
            depool: string// address,
            depool_pubkey: string// uint256,
            balance: string// uint128,
            lend_ownership: {
                lend_addr: string// address
                lend_balance: string// uint128
                lend_finish_time: number// uint32
            }// tuple[],
            lend_balance: string// uint128,
            transferring_stake_back: boolean// bool,
            last_depool_error: number// uint8,
        }
    }> {
        return await runHelper(this, "getDetails", {});
    }

    async runLocalGetDetails(): Promise<{
        transaction: Transaction,
        output: {
            owner_pubkey: string// uint256,
            owner_address: string// address,
            depool: string// address,
            depool_pubkey: string// uint256,
            balance: string// uint128,
            lend_ownership: {
                lend_addr: string// address
                lend_balance: string// uint128
                lend_finish_time: number// uint32
            }// tuple[],
            lend_balance: string// uint128,
            transferring_stake_back: boolean// bool,
            last_depool_error: number// uint8,
        }
    }> {
        return await runLocalHelper(this, "getDetails", {});
    }

    async runCalcStTONsAddr(input: {
        code: string// cell,
        owner_pubkey: string | number | bigint// uint256,
        owner_address?: string// optional(address),
        depool: string// address,
        depool_pubkey: string | number | bigint// uint256,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string// address,
        }
    }> {
        return await runHelper(this, "calcStTONsAddr", input);
    }

    async runLocalCalcStTONsAddr(input: {
        code: string// cell,
        owner_pubkey: string | number | bigint// uint256,
        owner_address?: string// optional(address),
        depool: string// address,
        depool_pubkey: string | number | bigint// uint256,
    }): Promise<{
        transaction: Transaction,
        output: {
            value0: string// address,
        }
    }> {
        return await runLocalHelper(this, "calcStTONsAddr", input);
    }

}

