Polymorphism.inherits(RightPaddle, Paddle);
function RightPaddle(_x, _y, _width, _height, _speed) {
   	Paddle.call(this, _x, _y, _width, _height, _speed);
   	
   	this.getFillStyle = function() {
		return "white";
   	};
   	this.drawActor = function(_ctx) {
		_ctx.fillRect( this.getX(), this.getY(), this.getWidth(), this.getHeight() );
	};
}