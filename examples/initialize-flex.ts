import { TonClient } from "@eversdk/core";
import { libNode } from "@eversdk/lib-node";
import { Flex, FlexConfig } from "../flex";

TonClient.useBinaryLibrary(libNode);

 (async () => {
    try {
        // Flex Initialization
        const FLEX_CONFIG: Partial<FlexConfig> = {
            evr: {
                sdk: {
                    network: {
                        endpoints: ["https://test.flex.everos.dev/graphql"],
                    },
                },
            },
            superRoot: "Super Root address",
        };
        const flex = new Flex(FLEX_CONFIG);

        await flex.close();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
