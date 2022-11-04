import { Flex, Trader } from "../flex";
import { CONFIG, EXAMPLES_FLEX_CONFIG } from "./examples";
//import { LogLevel } from "../contracts/helpers";

(async () => {
    const flex = new Flex(EXAMPLES_FLEX_CONFIG);
    try {
        // flex.evr.log.level = LogLevel.DEBUG;
        const clientAddress = CONFIG.trader.client;
        const traderId = CONFIG.trader.id;
        const marketAddress = CONFIG.market;

        let orderInfo = await Trader.makeOrder(flex, {
            clientAddress: clientAddress,
            trader: {
                id: traderId,
                signer: "traderSigner",
            },
            sell: false,
            marketAddress: marketAddress,
            price: { tokens: 10 },
            amount: { tokens: 100000 },
            waitForOrderbookUpdate: true,
        });

        flex.evr.log.info("Order info", orderInfo);

        await flex.close();

    } catch (err) {
        flex.evr.log.error(err);
        process.exit(1);
    }
})();
