/**
 * Created by dillon_cordova on 12/4/2016.
 */
Polymorphism.inherits(LeftPaddle, Paddle);
function LeftPaddle(_x, _y, _width, _height, _speed) {
	Paddle.call(this, _x, _y, _width, _height, _speed);

	this.getFillStyle = function() {
		return "white";
   	};
}
