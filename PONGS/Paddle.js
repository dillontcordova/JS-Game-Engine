/**
 * Created by dillon_cordova on 1/3/2016.
 */
Polymorphism.inherits(Paddle, Actor);
function Paddle(_x, _y, _width, _height, _speed) {
    Polymorphism.abstractClass(this, arguments);
	Actor.call(this, _x, _y, _width, _height, _speed);

	this.tick = function(canvasHeight, canvasWidth, input) {
		var y;
		var x;

		if( input.isPressed('left_arrow') ) {			
		}
		if( input.isPressed('up_arrow') ) {
			y = this.getY();
			this.setY(y - 5);
		}
		if( input.isPressed('right_arrow') ) {
		}

		if( input.isPressed('down_arrow') ) {
			y = this.getY();
			this.setY(y + 5);
		}
	};
}
