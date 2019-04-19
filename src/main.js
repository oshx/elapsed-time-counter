var GLOBAL_BASE_NAME = '__ELAPSED_TIME_COUNTER_GLOBAL_BASE_TIME__';
var setStartTime = function setStartTime() {
    const GLOBAL_BASE_TIME = new Date().getTime();
    if (!window) {
        return null;
    }
    return window[GLOBAL_BASE_NAME] = GLOBAL_BASE_TIME;
}
var getStartTime = function getStartTime() {
    if (!window[GLOBAL_BASE_NAME]) {
        setStartTime();
    }
    return window[GLOBAL_BASE_NAME];
}
module.exports = new (function ElapsedTimeCounter() {
    return {
        setStartTime,
        getStartTime
    };
})();
