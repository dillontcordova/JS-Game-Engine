/**
 * Created by dillon_cordova on 1/4/2016.
 */
var Assert = (function() {
	var isDevelopModeOn = false;
	var isDebugModeOn = true;

	return {
		is: function(_condition, _message) {
			if(isDebugModeOn && !_condition) {
				throw new Error(_message);
			}
		},
		console: function(_message) {
			if(isDevelopModeOn) {
				console.log(_message);
			}
		},
		setDebugModeTo: function(_bool) {
			isDebugModeOn = _bool;
		},
		setDevelopModeTo: function(_bool) {
			isDevelopModeOn = _bool;
		}
	};
})();