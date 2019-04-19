declare module "elapsed-time-counter" {
    interface ElapsedTimeCounter {
        setStartTime(): null | number;
        getStartTime(): number;
    }

    interface ElapsedTimeCounterConstructor {
        new (): ElapsedTimeCounter;
    }

    let etc: ElapsedTimeCounter;
    export = etc;
}
