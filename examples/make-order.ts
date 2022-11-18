import { Flex, makeOrderFinalized, Trader } from "../flex";
import { CONFIG, EXAMPLES_FLEX_CONFIG } from "./examples";
//import { LogLevel } from "../contracts/helpers";

(async () => {
    const flex = new Flex(EXAMPLES_FLEX_CONFIG);
    try {
        // flex.evr.log.level = LogLevel.DEBUG;
        const clientAddress = CONFIG.trader.client;
        const traderId = CONFIG.trader.id;
        const marketAddress = CONFIG.market;

        let result = await Trader.makeOrder(flex, {
            clientAddress: clientAddress,
            trader: {
                id: traderId,
                signer: "traderSigner",
            },
            sell: true,
            marketAddress: marketAddress,
            price: 277777.1,
            amount: 0.00001,
            waitForOrderbookUpdate: false,
        });
        flex.evr.log.info("MakeOrder Initialization result on wallet", result);

        if (!makeOrderFinalized(result)) {
            result = await Trader.waitForMakeOrder(flex, result);
            flex.evr.log.info("Finalized Make order result in orderbook", result);
        }

        await flex.close();
    } catch (err) {
        flex.evr.log.error(err);
        process.exit(1);
    }
})();
