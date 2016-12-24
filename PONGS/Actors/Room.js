/**
 * Created by dillon_cordova on 12/4/2016.
 */
function Room(_x, _y, _width, _height) {
	var xyPoint = new Point(_x, _y);
	var collisionObj = new Collision(xyPoint, _width, _height);
	var boundBox = collisionObj.getBoundBox();

	this.getBoundBox = function () {
		return boundBox;
	};

	function isPowerOfTwo(int) {
		return ((int != 0) && !(int & (int - 1)));
	}
}