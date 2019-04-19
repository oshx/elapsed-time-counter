const GLOBAL_BASE_NAME = '__ELAPSED_TIME_COUNTER_GLOBAL_BASE_TIME__';

export default new (class ElapsedTimeCounter {
    setStartTime() {
        const GLOBAL_BASE_TIME = new Date().getTime();
        if (!window) {
            return null;
        }
        return window[GLOBAL_BASE_NAME] = GLOBAL_BASE_TIME;
    }
    getStartTime() {
        if (!window[GLOBAL_BASE_NAME]) {
            this.setStartTime();
        }
        return window[GLOBAL_BASE_NAME];
    }
})();
