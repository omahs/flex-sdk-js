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
const flex_1 = require("../flex");
const examples_1 = require("./examples");
const flex_2 = require("../flex");
const flex_3 = require("../flex");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const flex = new flex_1.Flex(examples_1.EXAMPLES_FLEX_CONFIG);
    try {
        flex.evr.log.info("Tokens", yield flex_2.Token.queryTokens(flex));
        flex.evr.log.info("Markets", yield flex_3.Market.queryMarkets(flex));
        flex.evr.log.info("Market Order Book", yield flex_3.Market.queryOrderBook(flex, examples_1.CONFIG.market));
        flex.evr.log.info("Market Price", yield flex_3.Market.queryPrice(flex, examples_1.CONFIG.market));
        yield flex.close();
    }
    catch (err) {
        flex.evr.log.error(err);
        process.exit(1);
    }
}))();
//# sourceMappingURL=flex-info.js.map