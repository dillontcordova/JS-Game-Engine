/**
 * Created by dillon_cordova on 1/14/2016.
 */
var CollisionEnum = (function() {
	var top = 1 << 0;
	var left = 1 << 1;
	var right = 1 << 2;
	var bottom = 1 << 3;
	var topLeft = top | left;
	var topRight = top | right;
	var bottomLeft = bottom | left;
	var bottomRight = bottom | right;

	return {
		TOP: top,
		LEFT: left,
		RIGHT: right,
		BOTTOM: bottom,
		TOP_LEFT: topLeft,
		TOP_RIGHT: topRight,
		BOTTOM_LEFT: bottomLeft,
		BOTTOM_RIGHT: bottomRight
	};
})();