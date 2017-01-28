/**
 * Created by dillon_cordova on 12/14/2016.
 */
let CollisionEnum = (function() {
	let top = 1 << 0;
	let left = 1 << 1;
	let right = 1 << 2;
	let bottom = 1 << 3;
	let topLeft = top | left;
	let topRight = top | right;
	let bottomLeft = bottom | left;
	let bottomRight = bottom | right;
	let allSides = bottom | right | left | top;

	return {
		TOP:			top,
		LEFT:			left,
		RIGHT:			right,
		BOTTOM:			bottom,
		TOP_LEFT:		topLeft,
		ALL_SIDES:		allSides,
		TOP_RIGHT:		topRight,
		BOTTOM_LEFT:	bottomLeft,
		BOTTOM_RIGHT:	bottomRight
	};
})();