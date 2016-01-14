var Assert = (function() {
	var isDebugModeOn = true;
	return {
		is: function(_condition, _message) {
			if(isDebugModeOn && !_condition) {
				throw new Error(_message);
			}
		},
		setDebugModeTo: function(_bool) {
			isDebugModeOn = _bool;
		}
	};
})();
