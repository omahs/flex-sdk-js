"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tip31WrapperAccount = void 0;
const appkit_1 = require("@eversdk/appkit");
const helpers_1 = require("../helpers");
class Tip31WrapperAccount extends appkit_1.Account {
    constructor(options) {
        var _a;
        super(Tip31WrapperAccount.package, options);
        this.log = (_a = options.log) !== null && _a !== void 0 ? _a : helpers_1.Log.default;
    }
    deployContract() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.deployHelper)(this, "", {});
        });
    }
    runInit(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "init", input, options);
        });
    }
    init(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "init", input);
        });
    }
    runDeployEmptyWallet(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "deployEmptyWallet", input, options);
        });
    }
    deployEmptyWallet(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "deployEmptyWallet", input);
        });
    }
    runOnAcceptTokensTransfer(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "onAcceptTokensTransfer", input, options);
        });
    }
    onAcceptTokensTransfer(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "onAcceptTokensTransfer", input);
        });
    }
    runBurn(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "burn", input, options);
        });
    }
    burn(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "burn", input);
        });
    }
    runTransferFromReserveWallet(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "transferFromReserveWallet", input, options);
        });
    }
    transferFromReserveWallet(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "transferFromReserveWallet", input);
        });
    }
    runRequestTotalGranted(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "requestTotalGranted", input, options);
        });
    }
    requestTotalGranted(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "requestTotalGranted", input);
        });
    }
    runCloned(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "cloned", input, options);
        });
    }
    cloned(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "cloned", input);
        });
    }
    runSetCloned(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "setCloned", input, options);
        });
    }
    setCloned(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "setCloned", input);
        });
    }
    runUpgradeExternalWallet(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "upgradeExternalWallet", {}, options);
        });
    }
    upgradeExternalWallet() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "upgradeExternalWallet", {});
        });
    }
    runGetDetails(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getDetails", {}, options);
        });
    }
    getDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getDetails", {});
        });
    }
    runGetTip3Config(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getTip3Config", {}, options);
        });
    }
    getTip3Config() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getTip3Config", {});
        });
    }
    runHasInternalWalletCode(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "hasInternalWalletCode", {}, options);
        });
    }
    hasInternalWalletCode() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "hasInternalWalletCode", {});
        });
    }
    runGetWalletAddress(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getWalletAddress", input, options);
        });
    }
    getWalletAddress(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getWalletAddress", input);
        });
    }
    runGetReserveWallet(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getReserveWallet", {}, options);
        });
    }
    getReserveWallet() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getReserveWallet", {});
        });
    }
}
exports.Tip31WrapperAccount = Tip31WrapperAccount;
Tip31WrapperAccount.package = {
    abi: { "ABI version": 2, "version": "2.3.0", "header": ["pubkey", "time", "expire"], "functions": [{ "name": "init", "inputs": [{ "name": "external_wallet", "type": "address" }, { "name": "reserve_wallet_evers", "type": "uint128" }, { "name": "internal_wallet_code", "type": "cell" }], "outputs": [], "id": "0xa" }, { "name": "deployEmptyWallet", "inputs": [{ "name": "_answer_id", "type": "uint32" }, { "name": "pubkey", "type": "uint256" }, { "name": "owner", "type": "optional(address)" }, { "name": "evers", "type": "uint128" }], "outputs": [{ "name": "value0", "type": "address" }], "id": "0xb" }, { "name": "onAcceptTokensTransfer", "inputs": [{ "name": "tokenRoot", "type": "address" }, { "name": "amount", "type": "uint128" }, { "name": "sender", "type": "address" }, { "name": "senderWallet", "type": "address" }, { "name": "remainingGasTo", "type": "address" }, { "name": "payload", "type": "cell" }], "outputs": [] }, { "name": "burn", "inputs": [{ "name": "tokens", "type": "uint128" }, { "name": "answer_addr", "type": "address" }, { "name": "sender_pubkey", "type": "uint256" }, { "name": "sender_owner", "type": "optional(address)" }, { "name": "out_pubkey", "type": "uint256" }, { "name": "out_owner", "type": "optional(address)" }, { "name": "notify", "type": "optional(cell)" }], "outputs": [], "id": "0xc" }, { "name": "transferFromReserveWallet", "inputs": [{ "name": "answer_addr", "type": "optional(address)" }, { "name": "to", "type": "address" }, { "name": "tokens", "type": "uint128" }], "outputs": [], "id": "0xd" }, { "name": "requestTotalGranted", "inputs": [{ "name": "_answer_id", "type": "uint32" }], "outputs": [{ "name": "value0", "type": "uint128" }], "id": "0xe" }, { "name": "cloned", "inputs": [{ "name": "_answer_id", "type": "uint32" }], "outputs": [{ "name": "first", "type": "optional(address)" }, { "name": "second", "type": "uint256" }], "id": "0x400" }, { "name": "setCloned", "inputs": [{ "name": "cloned", "type": "optional(address)" }, { "name": "cloned_pubkey", "type": "uint256" }, { "name": "wrappers_cfg", "type": "address" }, { "name": "wrappers_cfg_code_hash", "type": "uint256" }, { "name": "wrappers_cfg_code_depth", "type": "uint16" }], "outputs": [], "id": "0x500" }, { "name": "upgradeExternalWallet", "inputs": [], "outputs": [] }, { "name": "getDetails", "inputs": [], "outputs": [{ "name": "name", "type": "string" }, { "name": "symbol", "type": "string" }, { "name": "decimals", "type": "uint8" }, { "name": "root_pubkey", "type": "uint256" }, { "name": "total_granted", "type": "uint128" }, { "name": "wallet_code", "type": "cell" }, { "name": "external_wallet", "type": "optional(address)" }, { "name": "reserve_wallet", "type": "address" }, { "name": "super_root", "type": "address" }, { "name": "cloned", "type": "optional(address)" }, { "name": "type_id", "type": "uint8" }], "id": "0x100" }, { "name": "getTip3Config", "inputs": [], "outputs": [{ "name": "name", "type": "string" }, { "name": "symbol", "type": "string" }, { "name": "decimals", "type": "uint8" }, { "name": "root_pubkey", "type": "uint256" }, { "name": "root_address", "type": "address" }], "id": "0x200" }, { "name": "hasInternalWalletCode", "inputs": [], "outputs": [{ "name": "value0", "type": "bool" }], "id": "0x10" }, { "name": "getWalletAddress", "inputs": [{ "name": "pubkey", "type": "uint256" }, { "name": "owner", "type": "optional(address)" }], "outputs": [{ "name": "value0", "type": "address" }], "id": "0x300" }, { "name": "getReserveWallet", "inputs": [], "outputs": [{ "name": "value0", "type": "address" }], "id": "0x12" }], "fields": [{ "name": "__uninitialized", "type": "bool" }, { "name": "wic_unsalted_code_", "type": "cell" }, { "name": "name_", "type": "string" }, { "name": "symbol_", "type": "string" }, { "name": "decimals_", "type": "uint8" }, { "name": "workchain_id_", "type": "int8" }, { "name": "root_pubkey_", "type": "uint256" }, { "name": "total_granted_", "type": "uint128" }, { "name": "internal_wallet_code_", "type": "optional(cell)" }, { "name": "start_balance_", "type": "varuint16" }, { "name": "super_root_", "type": "optional(address)" }, { "name": "wallet_", "type": "optional(address)" }, { "name": "cloned_", "type": "optional(address)" }, { "name": "cloned_pubkey_", "type": "uint256" }, { "name": "out_deploy_value_", "type": "uint128" }], "events": [] },
    tvc: "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",
    code: "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",
    codeHash: "6b16463417574422c48acf5755fe8f34906faf7555fe5e9e3f58d07755c8249d",
};
//# sourceMappingURL=Tip31WrapperAccount.js.map