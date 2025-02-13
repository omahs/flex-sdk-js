import { DerivativeTransaction } from "../web3/accounts";
import { AccountClass } from "../../contracts";
export declare enum ProcessingStatus {
    STARTING = 0,
    FINALIZING = 1,
    SUCCESS = 2,
    ERROR = 3
}
type StartingState<P> = {
    status: ProcessingStatus.STARTING;
    params: P;
    message: string;
    shard_block_id: string;
};
type FinalizingState<P> = {
    status: ProcessingStatus.FINALIZING;
    params: P;
    startingTransactionId: string;
};
type SuccessState = {
    status: ProcessingStatus.SUCCESS;
    startingTransactionId: string;
    finalizingTransactions: string[];
};
type ErrorState = {
    status: ProcessingStatus.ERROR;
    error: ErrorInfo;
};
type ErrorInfo = {
    message: string;
    code?: number;
    data?: any;
};
export type SdkError = Error & {
    code?: number;
    data?: {
        local_error?: {
            code: number;
            data?: {
                exit_code?: number;
            };
        };
    };
};
export type ProcessingResult<R, P> = R & (StartingState<P> | FinalizingState<P> | SuccessState | ErrorState);
export declare function processingError<R>(result: R, error: Error): ProcessingResult<R, any>;
export declare function resolveDerivativeTransaction<R>(transactions: {
    [address: string]: DerivativeTransaction;
}, address: string, contract: AccountClass, result: R, toSuccess: (transaction: DerivativeTransaction) => R, toError: (error: Error) => R): {
    result: R;
    transaction: DerivativeTransaction | undefined;
};
export {};
//# sourceMappingURL=processing.d.ts.map