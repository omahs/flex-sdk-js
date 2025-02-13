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
exports.AuthIndexAccount = void 0;
const appkit_1 = require("@eversdk/appkit");
const helpers_1 = require("../helpers");
class AuthIndexAccount extends appkit_1.Account {
    constructor(options) {
        var _a;
        super(AuthIndexAccount.package, options);
        this.log = (_a = options.log) !== null && _a !== void 0 ? _a : helpers_1.Log.default;
    }
    deployContract() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.deployHelper)(this, "", {});
        });
    }
    runOnDeploy(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "onDeploy", {}, options);
        });
    }
    onDeploy() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "onDeploy", {});
        });
    }
    runRemove(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "remove", input, options);
        });
    }
    remove(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "remove", input);
        });
    }
}
exports.AuthIndexAccount = AuthIndexAccount;
AuthIndexAccount.package = {
    abi: { "ABI version": 2, "version": "2.3.0", "header": ["pubkey", "time", "expire"], "functions": [{ "name": "onDeploy", "inputs": [], "outputs": [], "id": "0xa" }, { "name": "remove", "inputs": [{ "name": "dst", "type": "address" }], "outputs": [], "id": "0xb" }], "fields": [{ "name": "__uninitialized", "type": "bool" }, { "name": "pubkey_", "type": "uint256" }, { "name": "owner_", "type": "optional(address)" }], "events": [] },
    tvc: "te6ccgECDwEAAg4AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAij/ACDBAfSkIFiS9KDgXwKKIO1T2QYEAQr0pCD0oQUAAAIBIAkHAQ7/MNDbPPIpCAAY0wEwwALtQAHysO1QAuLfAdAg0wDtQALycCDWAdMAMPJ3kwHtUCXHAQXbPI69MCbXDR9vo5twVSBVFFUXXwcB2eEwJ9dJ8rCco/J5cFURVRRfBAHZ4W0H0x+dW6PyeXBVEVUUXwQB2SLBCyYh4SfHAiHhMKPyeXBVEVUUXwQB2Q4KBPyPYgLACyLhAqPyeds8cPhkBPpAMCTy4GQhCNMA0wDTAPpAMFALxwXy4GRxF7BEMNs8yHQhAc8LA3ASzwsBydABzhLOcPoCGfQAcPoCcPoCcM8LYcmBAKP7AIALWVUTVRZfBgHZ4QLACiLh2zxw+GTy0GUwBtMA0wDTAPpAMHENDA0LAR5KENs8elVAVRZVGV8JAdkMAGLtQMhwzwsAcROwlcntVO1QAaNQU8v/mnDPCwBVEVtVAdkjAeFxzwsAA1ADzgEwVQHZAGjtQO1E0NMAAfJ/0/+UAu1QAQHTAJ1wcFURW1USAVURVQPZIgHh+kAwcVUBMFUSAVURVQPZAFjTAO1AAvJw0wDTANMA+kD6QAbtUF8F+gD0BPoA+gDTP9Mf0wAwwwBxsAZfBg==",
    code: "te6ccgECDAEAAeEAAij/ACDBAfSkIFiS9KDgXwKKIO1T2QMBAQr0pCD0oQIAAAIBIAYEAQ7/MNDbPPIpBQAY0wEwwALtQAHysO1QAuLfAdAg0wDtQALycCDWAdMAMPJ3kwHtUCXHAQXbPI69MCbXDR9vo5twVSBVFFUXXwcB2eEwJ9dJ8rCco/J5cFURVRRfBAHZ4W0H0x+dW6PyeXBVEVUUXwQB2SLBCyYh4SfHAiHhMKPyeXBVEVUUXwQB2QsHBPyPYgLACyLhAqPyeds8cPhkBPpAMCTy4GQhCNMA0wDTAPpAMFALxwXy4GRxF7BEMNs8yHQhAc8LA3ASzwsBydABzhLOcPoCGfQAcPoCcPoCcM8LYcmBAKP7AIALWVUTVRZfBgHZ4QLACiLh2zxw+GTy0GUwBtMA0wDTAPpAMHEKCQoIAR5KENs8elVAVRZVGV8JAdkJAGLtQMhwzwsAcROwlcntVO1QAaNQU8v/mnDPCwBVEVtVAdkjAeFxzwsAA1ADzgEwVQHZAGjtQO1E0NMAAfJ/0/+UAu1QAQHTAJ1wcFURW1USAVURVQPZIgHh+kAwcVUBMFUSAVURVQPZAFjTAO1AAvJw0wDTANMA+kD6QAbtUF8F+gD0BPoA+gDTP9Mf0wAwwwBxsAZfBg==",
    codeHash: "f5d205ce22e13d69e95baaa5ff056744ab175635dc2a17ec20a4bc8bcbc984d2",
};
//# sourceMappingURL=AuthIndexAccount.js.map