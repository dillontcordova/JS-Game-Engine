/**
 * Created by dillon_cordova on 12/4/2016.
 */
let Assert = (function() {
	let isDevelopModeOn = false;
	let isDebugModeOn = true;

	return {
		is: function(_condition, _message) {
			if(isDebugModeOn && !_condition) {
				throw new Error(_message);
			}
		},
		console: function(_message, _condition) {
			if(isDevelopModeOn && (_condition || _condition === undefined)) {
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