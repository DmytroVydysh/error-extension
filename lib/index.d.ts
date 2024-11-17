declare global {
    interface Error {
        is: (instance: Function | RegExp | string, handler: (e: Error) => void) => Error;
        any: (handler: (e: Error) => void) => Error;
        handled: boolean;
    }
}
export declare function extend(): void;
//# sourceMappingURL=index.d.ts.map