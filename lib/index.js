var _baseTime;

function _getNewTime() {
	return new Date().getTime();
}

function _setNewTime() {
	_baseTime = _getNewTime();
}

function ElapsedTimeCounter() {
	_baseTime = _getNewTime();
}

ElapsedTimeCounter.prototype = {
	compareNow: function compareNow() {
		return _baseTime - _getNewTime();
	},
	getStamp: function getStamp() {
		return _baseTime + 0;
	},
	setStamp: function setStamp() {
		_setNewTime();
		return runningInstance;
	}
};

var runningInstance = new ElapsedTimeCounter();

module.exports = runningInstance;
