import { Flex, Trader } from "../flex";
import { CONFIG, EXAMPLES_FLEX_CONFIG } from "./examples";
//import { LogLevel } from "../contracts/helpers";

(async () => {
    try {
        const flex = new Flex(EXAMPLES_FLEX_CONFIG);
       // flex.evr.log.level = LogLevel.DEBUG;
       const clientAddress = CONFIG.trader.client;
       const traderId = CONFIG.trader.id;
       const marketAddress = CONFIG.market;

        await Trader.makeOrder(
            flex,
            {
                clientAddress: clientAddress,
                trader: {
                    id: traderId,
                    signer: 'trader_1'
                },
                sell: true,
                marketAddress: marketAddress,
                price: 2.6,
                amount: 18,
            },
        );

        await flex.close();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
