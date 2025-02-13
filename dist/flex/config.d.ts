import { EvrConfig } from "./web3";
export declare enum MakeOrderMode {
    IOP = "IOP",
    IOC = "IOC",
    POST = "POST"
}
export type FlexConfig = {
    superRoot: string;
    globalConfig?: string;
    evr?: EvrConfig;
    trader: {
        deploy: {
            eversAll: number;
            eversAuth: number;
            refillWallet: number;
            minRefill: number;
        };
        order: {
            evers: number;
            mode: MakeOrderMode;
        };
    };
};
export declare function defaultConfig(): FlexConfig;
//# sourceMappingURL=config.d.ts.map