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
const init_1 = require("./init");
const flex_1 = require("../flex");
const contracts_1 = require("../contracts");
beforeAll(init_1.initIntegrationTest);
afterAll(init_1.doneIntegrationTest);
function getAddresses() {
    return __awaiter(this, void 0, void 0, function* () {
        return {
            everWallet: yield new flex_1.EverWallet(init_1.FLEX.evr, init_1.CONFIG.everWallet).getAddress(),
            flexClient: yield (yield init_1.FLEX.evr.accounts.get(contracts_1.FlexClientAccount, init_1.CONFIG.client)).getAddress(),
        };
    });
}
function checkBalances() {
    return __awaiter(this, void 0, void 0, function* () {
        const { everWallet, flexClient } = yield getAddresses();
        const balances = yield init_1.FLEX.evr.accounts.getBalancesUnits([flexClient, everWallet]);
        expect(balances.get(flexClient)).toBeGreaterThan(flex_1.Evr.toUnits(40));
        expect(balances.get(everWallet)).toBeGreaterThan(flex_1.Evr.toUnits(100));
    });
}
test("integration test", () => __awaiter(void 0, void 0, void 0, function* () {
    yield checkBalances();
}));
//# sourceMappingURL=index.js.map