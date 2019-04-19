var GLOBAL_BASE_NAME = '__ELAPSED_TIME_COUNTER_GLOBAL_BASE_TIME__';

function getStartTime() {
	if (!window[GLOBAL_BASE_NAME]) {
		setStartTime();
	}
	return window[GLOBAL_BASE_NAME];
}

function setStartTime() {
	var GLOBAL_BASE_TIME = new Date().getTime();
	if (!window) {
		return null;
	}
	window[GLOBAL_BASE_NAME] = GLOBAL_BASE_TIME;
	return GLOBAL_BASE_TIME;
}

module.exports = {
    getStartTime: getStartTime,
    setStartTime: setStartTime
};
