/**
 * Created by dillon_cordova on 1/4/2016.
 */
Polymorphism.inherits(Ball, Actor);
function Ball(_x, _y, _width, _height, _acceleration) {
	Actor.call(this, _x, _y, _width, _height, _acceleration);
	var curBoundBox = this.getCollision();

	this.getFillStyle = function() {
		return "orange";
   	};
	this.tickActor = function(_otherCollision) {
		this.physics();
		debugger;
		curBoundBox.checkCollision ( _otherCollision );
	};
	this.drawActor = function(_ctx) {
		_ctx.fillRect( this.getX(), this.getY(), this.getWidth(), this.getHeight() );
	};

	this.physics = function() {
		if( curBoundBox.isColliding() ){
			if( curBoundBox.isCollidingLeft() || curBoundBox.isCollidingRight() ){
				this.setVelX(-this.getVelX());
			}
			if( curBoundBox.isCollidingTop() ){
				this.setVelY(-this.getVelY());
			}
			if( curBoundBox.isCollidingBottom() ){
				this.setVelY(-this.getVelY());
			}
		}

		this.setX(this.getX() + this.getVelX());
	};
}