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
exports.DePoolMockAccount = void 0;
const appkit_1 = require("@eversdk/appkit");
const helpers_1 = require("../helpers");
class DePoolMockAccount extends appkit_1.Account {
    constructor(options) {
        var _a;
        super(DePoolMockAccount.package, options);
        this.log = (_a = options.log) !== null && _a !== void 0 ? _a : helpers_1.Log.default;
    }
    deployContract(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.deployHelper)(this, "constructor", input);
        });
    }
    runSendOnTransfer(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "sendOnTransfer", input, options);
        });
    }
    sendOnTransfer(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "sendOnTransfer", input);
        });
    }
    runTransferStake(input, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runHelper)(this, "transferStake", input, options);
        });
    }
    transferStake(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, helpers_1.runLocalHelper)(this, "transferStake", input);
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
}
exports.DePoolMockAccount = DePoolMockAccount;
DePoolMockAccount.package = {
    abi: { "ABI version": 2, "version": "2.2.0", "header": ["pubkey", "time", "expire"], "functions": [{ "name": "constructor", "inputs": [{ "name": "owner_pubkey", "type": "uint256" }], "outputs": [] }, { "name": "sendOnTransfer", "inputs": [{ "name": "dst", "type": "address" }, { "name": "src", "type": "address" }, { "name": "amount", "type": "uint128" }], "outputs": [] }, { "name": "transferStake", "inputs": [{ "name": "destination", "type": "address" }, { "name": "amount", "type": "uint64" }], "outputs": [], "id": "0x6810bf4e" }, { "name": "getDetails", "inputs": [], "outputs": [{ "name": "owner_pubkey", "type": "uint256" }, { "components": [{ "name": "dst", "type": "address" }, { "name": "src", "type": "address" }, { "name": "amount", "type": "uint128" }, { "name": "timestamp", "type": "uint64" }], "name": "fwd_records", "type": "tuple[]" }, { "components": [{ "name": "dst", "type": "address" }, { "name": "src", "type": "address" }, { "name": "amount", "type": "uint128" }, { "name": "timestamp", "type": "uint64" }], "name": "bck_records", "type": "tuple[]" }], "id": "0x14" }], "fields": [{ "name": "__uninitialized", "type": "bool" }, { "name": "owner_pubkey_", "type": "uint256" }, { "components": [{ "name": "dst", "type": "address" }, { "name": "src", "type": "address" }, { "name": "amount", "type": "uint128" }, { "name": "timestamp", "type": "uint64" }], "name": "fwd_records_", "type": "tuple[]" }, { "components": [{ "name": "dst", "type": "address" }, { "name": "src", "type": "address" }, { "name": "amount", "type": "uint128" }, { "name": "timestamp", "type": "uint64" }], "name": "bck_records_", "type": "tuple[]" }], "events": [] },
    tvc: "te6ccgECFQEAA40AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAij/ACDBAfSkIFiS9KDgXwKKIO1T2QYEAQr0pCD0oQUAAAIBIBIHAgL9EAgCASARCQE1I6AAdMAmXBwJAFVEVUC2SIB4YECANcYcSTZgCgEujoAi0wCZcHAkVREBVRHZIgHh0/9xJNkLAv5t7UAHwwAD0z/TH9MfkwHtUIIQHEYdICMBuY6A4QLAFPKp7UTQ0wAB8n9w+GTTP9P/0x/0BIAUYdDTAcgCwAID0x8E8rBzIwHPCwFwJAHPCwHJ0AHOAvpAgBRQJM6AFBXPCx8Yy/8Wyx9xE88LYVBC9AAUyx8B9AQwAfQAyVACDQwAHszJcPsAVSBVdFU9Xw8B2QH6ghA8keHFIwG5jlaCEDyR4cUTuvKpBvKoBKPy4ERbB/kBQIP5EPKo7UTQ0wAw8r74AHD4ZNXT/9HIcM8LQMv/cM8LHyUB9ABwzwsfFfQAye1UghA8keHFWVUDVSVfBlUB2eGCEBxGHSCCEBxGHSAUuvKpB/KoBaPy4EQK+QEOAf5UELb5EPKo7UTQ0wAB8n/TP1MSvgHT/9Mf9AQFwwBQBLAE0x/0BDAF8nz4I4ED6CGogggbd0CgJwG5cFRBmeMEB/K8cPhkCNX6QNX6QNN/0VLougLRAfLgZPgAyFMgzlIizicBy38cyz/JUAvMJKQByYAgAVUFVQdVAvQXyHYhDwDIAc8LA3AiAc8LAcnQAc4UzoIImJaA+gIZ9ACCECPEdx0TzwsfcBP6AlCSznAS+gIEzwt/cRTPC2EDyVADzMlx+wDIcM8LABTLPxfL/xTLHxL0AMsf9ADJ7VRVIFU1XwdZAVUB2QIBIBERAAU8jaABAt8TAf5tAtDTAO1AAvJwINYB0wAw8ncwAtMfghBoEL9OErryqe1E0NMAAfJ/cPhkA9MA0wDTAPpAyFMgzgnTPwj6QNM/MAPOUCrLf/gjA/pACdP/UFPLP8lQC8zJAdMf9ATTH/QEgCBVBSRVA1UC9BcL+gDtR28QbxdvEBKicvsCyAOkFADSdiQBzwsDcCUBzwsBydABzhnOcPoCH/QAgnA/EJ5EAAAAAAAAAAAAAAAAE88Lf3AT+gICyXAT+gJxzwthEszJgQCA+wDIcM8LABTLPxTL/8sfEvQAEssfFfQAye1UXwTtUIIQaBC/TgJb",
    code: "te6ccgECEgEAA2AAAij/ACDBAfSkIFiS9KDgXwKKIO1T2QMBAQr0pCD0oQIAAAIBIA8EAgL9DQUCASAOBgE1I6AAdMAmXBwJAFVEVUC2SIB4YECANcYcSTZgBwEujoAi0wCZcHAkVREBVRHZIgHh0/9xJNkIAv5t7UAHwwAD0z/TH9MfkwHtUIIQHEYdICMBuY6A4QLAFPKp7UTQ0wAB8n9w+GTTP9P/0x/0BIAUYdDTAcgCwAID0x8E8rBzIwHPCwFwJAHPCwHJ0AHOAvpAgBRQJM6AFBXPCx8Yy/8Wyx9xE88LYVBC9AAUyx8B9AQwAfQAyVACCgkAHszJcPsAVSBVdFU9Xw8B2QH6ghA8keHFIwG5jlaCEDyR4cUTuvKpBvKoBKPy4ERbB/kBQIP5EPKo7UTQ0wAw8r74AHD4ZNXT/9HIcM8LQMv/cM8LHyUB9ABwzwsfFfQAye1UghA8keHFWVUDVSVfBlUB2eGCEBxGHSCCEBxGHSAUuvKpB/KoBaPy4EQK+QELAf5UELb5EPKo7UTQ0wAB8n/TP1MSvgHT/9Mf9AQFwwBQBLAE0x/0BDAF8nz4I4ED6CGogggbd0CgJwG5cFRBmeMEB/K8cPhkCNX6QNX6QNN/0VLougLRAfLgZPgAyFMgzlIizicBy38cyz/JUAvMJKQByYAgAVUFVQdVAvQXyHYhDADIAc8LA3AiAc8LAcnQAc4UzoIImJaA+gIZ9ACCECPEdx0TzwsfcBP6AlCSznAS+gIEzwt/cRTPC2EDyVADzMlx+wDIcM8LABTLPxfL/xTLHxL0AMsf9ADJ7VRVIFU1XwdZAVUB2QIBIA4OAAU8jaABAt8QAf5tAtDTAO1AAvJwINYB0wAw8ncwAtMfghBoEL9OErryqe1E0NMAAfJ/cPhkA9MA0wDTAPpAyFMgzgnTPwj6QNM/MAPOUCrLf/gjA/pACdP/UFPLP8lQC8zJAdMf9ATTH/QEgCBVBSRVA1UC9BcL+gDtR28QbxdvEBKicvsCyAOkEQDSdiQBzwsDcCUBzwsBydABzhnOcPoCH/QAgnA/EJ5EAAAAAAAAAAAAAAAAE88Lf3AT+gICyXAT+gJxzwthEszJgQCA+wDIcM8LABTLPxTL/8sfEvQAEssfFfQAye1UXwTtUIIQaBC/TgJb",
    codeHash: "8dd1d0cc0c2b69dcaf63e1c3c510a2a810aa8690acc0a8148eb3cd836390c374",
};
//# sourceMappingURL=DePoolMockAccount.js.map