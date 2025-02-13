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
exports.Flex = void 0;
const config_1 = require("./config");
const contracts_1 = require("../contracts");
const web3_1 = require("./web3");
const query_1 = require("./trader/query");
const utils_1 = require("./web3/utils");
class Flex {
    constructor(config) {
        this.cachedFlexClients = new Map();
        this.cachedTraderWallets = new Map();
        this.config = Object.assign(Object.assign({}, (0, config_1.defaultConfig)()), config);
        this.evr = new web3_1.Evr(config.evr);
    }
    getSuperRootAccount() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.evr.accounts.get(contracts_1.SuperRootAccount, this.config.superRoot);
        });
    }
    getGlobalConfigAccount() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const globalConfigAddress = (_a = this.config.globalConfig) !== null && _a !== void 0 ? _a : (yield (yield this.getSuperRootAccount()).getCurrentGlobalConfig()).output.value0;
            return yield this.evr.accounts.get(contracts_1.GlobalConfigAccount, globalConfigAddress);
        });
    }
    getFlexAccount() {
        return __awaiter(this, void 0, void 0, function* () {
            const globalConfig = yield this.getGlobalConfigAccount();
            const globalConfigDetails = (yield globalConfig.getDetails()).output;
            return yield this.evr.accounts.get(contracts_1.FlexAccount, globalConfigDetails.flex);
        });
    }
    getUserConfigAccount() {
        return __awaiter(this, void 0, void 0, function* () {
            const globalConfig = yield this.getGlobalConfigAccount();
            const globalConfigDetails = (yield globalConfig.getDetails()).output;
            return yield this.evr.accounts.get(contracts_1.UserDataConfigAccount, globalConfigDetails.user_cfg);
        });
    }
    getCachedFlexClient(client) {
        return __awaiter(this, void 0, void 0, function* () {
            const existing = this.cachedFlexClients.get(client);
            if (existing) {
                return existing;
            }
            const account = yield this.evr.accounts.get(contracts_1.FlexClientAccount, {
                address: client,
                useCachedState: true,
            });
            this.cachedFlexClients.set(client, account);
            return account;
        });
    }
    getCachedTraderWallets(client, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const key = `${client}/${id}`;
            const existing = this.cachedTraderWallets.get(key);
            if (existing) {
                return existing;
            }
            const wallets = yield (0, query_1.queryWallets)(this, {
                clientAddress: client,
                traderId: id,
            });
            this.cachedTraderWallets.set(key, wallets);
            return wallets;
        });
    }
    query(text) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.evr.sdk.net.query({
                query: `query {
                flex {
                    ${text}
                }
            }`,
            });
            return result.result.data.flex;
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.evr.close();
        });
    }
    getTip3TokenBalance(account) {
        return __awaiter(this, void 0, void 0, function* () {
            const balance = (yield account.balance({ answerId: 0 })).output.value0;
            const rootAddress = (yield account.root({ answerId: 0 })).output.value0;
            const root = yield this.evr.accounts.get(contracts_1.Tip31RootAccount, rootAddress);
            const decimals = (yield root.decimals({ answerId: 0 })).output.value0;
            return Number((0, utils_1.decimalFromNumAndDenomAsPowerOf10)(balance, decimals));
        });
    }
    getTokenBalance(account) {
        return __awaiter(this, void 0, void 0, function* () {
            const details = (yield account.getDetails()).output;
            return Number((0, utils_1.decimalFromNumAndDenomAsPowerOf10)(details.balance, details.decimals));
        });
    }
    getFlexTokenBalance(account) {
        return __awaiter(this, void 0, void 0, function* () {
            const details = (yield account.getDetails()).output;
            return Number((0, utils_1.decimalFromNumAndDenomAsPowerOf10)(details.balance, details.decimals));
        });
    }
}
exports.Flex = Flex;
//# sourceMappingURL=flex.js.map