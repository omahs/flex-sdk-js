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
exports.WICAccount = void 0;
const appkit_1 = require("@eversdk/appkit");
const helpers_1 = require("../helpers");
class WICAccount extends appkit_1.Account {
    constructor(options) {
        super(WICAccount.package, options);
    }
    deployContract() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.deployHelper)(this, "", {});
        });
    }
    runOnDeploy(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "onDeploy", input);
        });
    }
    runLocalOnDeploy(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "onDeploy", input);
        });
    }
    runSetNext(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "setNext", input);
        });
    }
    runLocalSetNext(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "setNext", input);
        });
    }
    runCloneUpgrade(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "cloneUpgrade", input);
        });
    }
    runLocalCloneUpgrade(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "cloneUpgrade", input);
        });
    }
    runUnlist() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "unlist", {});
        });
    }
    runLocalUnlist() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "unlist", {});
        });
    }
    runGetDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "getDetails", {});
        });
    }
    runLocalGetDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "getDetails", {});
        });
    }
}
exports.WICAccount = WICAccount;
WICAccount.package = {
    abi: { "ABI version": 2, "version": "2.2.0", "header": ["pubkey", "time", "expire"], "functions": [{ "name": "onDeploy", "inputs": [{ "name": "keep_evers", "type": "uint128" }, { "name": "old_wrappers_cfg", "type": "optional(address)" }, { "name": "keep_wrapper", "type": "optional(address)" }, { "name": "deployer", "type": "address" }, { "name": "type", "type": "uint8" }, { "name": "init_args", "type": "cell" }], "outputs": [], "id": "0xa" }, { "name": "setNext", "inputs": [{ "name": "old_wrappers_cfg", "type": "optional(address)" }, { "name": "next_symbol", "type": "optional(string)" }, { "name": "next", "type": "address" }], "outputs": [], "id": "0xb" }, { "name": "cloneUpgrade", "inputs": [{ "components": [{ "name": "deploy", "type": "uint128" }, { "name": "setnext", "type": "uint128" }, { "name": "wic_keep", "type": "uint128" }], "name": "evers", "type": "tuple" }, { "name": "first_clone", "type": "optional(address)" }, { "name": "last_clone", "type": "optional(address)" }, { "name": "prev_symbol", "type": "optional(string)" }, { "name": "wic_count", "type": "uint32" }, { "name": "token_version", "type": "uint32" }, { "name": "new_wrappers_cfg", "type": "address" }, { "name": "wrapper_deployers", "type": "address[]" }], "outputs": [], "id": "0xc" }, { "name": "unlist", "inputs": [], "outputs": [], "id": "0xd" }, { "name": "getDetails", "inputs": [], "outputs": [{ "name": "symbol", "type": "string" }, { "name": "workchain_id", "type": "int8" }, { "name": "deployer", "type": "optional(address)" }, { "name": "wrapper", "type": "optional(address)" }, { "name": "type", "type": "optional(uint8)" }, { "name": "init_args", "type": "optional(cell)" }, { "name": "next", "type": "optional(address)" }, { "name": "unlisted", "type": "bool" }], "id": "0xe" }], "fields": [{ "name": "__uninitialized", "type": "bool" }, { "name": "__await_next_id", "type": "uint32" }, { "name": "__await_dict", "type": "optional(cell)" }, { "name": "symbol_", "type": "string" }, { "name": "workchain_id_", "type": "int8" }, { "name": "deployer_", "type": "optional(address)" }, { "name": "wrapper_", "type": "optional(address)" }, { "name": "type_", "type": "optional(uint8)" }, { "name": "init_args_", "type": "optional(cell)" }, { "name": "next_", "type": "optional(address)" }, { "name": "unlisted_", "type": "bool" }], "events": [] },
    tvc: "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",
    code: "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",
    codeHash: "dd02a9ef34766ca2387b399a5fd068373fce90d4d275085662faf288306e9431",
};
//# sourceMappingURL=WICAccount.js.map