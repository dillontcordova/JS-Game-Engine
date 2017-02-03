/**
 * Created by dillon_cordova on 12/4/2016.
 */
Polymorphism.inherits(LeftPaddle, Paddle);
function LeftPaddle(_x, _y, _width, _height, _speed) {
	Paddle.call(this, _x, _y, _width, _height, _speed);

    this.movedUp = function movedUp(_input, _keyEnums) {
    	return _input.isPressed(_keyEnums.W);
    };
    this.movedDown = function movedDown(_input, _keyEnums) {
        return _input.isPressed(_keyEnums.S);
    };
}
