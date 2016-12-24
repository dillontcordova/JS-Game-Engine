/**
 * Created by dillon_cordova on 12/3/2016.
 */
Polymorphism.inherits(Paddle, Friendly);
function Paddle(_x, _y, _width, _height, _speed) {
    Polymorphism.abstractClass(this, arguments);
	Friendly.apply(this, arguments);

    this.physics = function() {
    };

    this.collision = function(_otherCollision) {
    };

	this.tick = function(_actors, input) {
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
