/**
 * Created by dillon_cordova on 12/4/2016.
 */
Polymorphism.inherits(RightPaddle, Paddle);
function RightPaddle(_x, _y, _width, _height, _speed) {
   	Paddle.call(this, _x, _y, _width, _height, _speed);
   	
   	this.getFillStyle = function() {
		return "white";
   	};

    this.movedUp = function movedUp(_input, _keyEnums) {
        return _input.isPressed(_keyEnums.UP_ARROW);
    };
    this.movedDown = function movedDown(_input, _keyEnums) {
        return _input.isPressed(_keyEnums.DOWN_ARROW);
    };
}