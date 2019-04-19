declare module "elapsed-time-counter" {
    interface ElapsedTimeCounter {
        setStamp(): ElapsedTimeCounter;
        getStamp(): number;
        compareNow(): number;
    }

    interface ElapsedTimeCounterConstructor {
        new (): ElapsedTimeCounter;
    }

    let etc: ElapsedTimeCounter;
    export = etc;
}
