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
	this.drawActor = function(_ctx) {
		_ctx.fillRect( this.getX(), this.getY(), this.getWidth(), this.getHeight() );
	};

    this.collision = function(_otherCollision) {
        curBoundBox.checkCollision(_otherCollision);
    };

	this.physics = function() {
		if( curBoundBox.isColliding() ){
            if( curBoundBox.isCollidingLeft() || curBoundBox.isCollidingRight() ){
                this.setVelX(-this.getVelX());
            }
            if( curBoundBox.isCollidingTop() ){
                this.setVelY(-1);
            }
            if( curBoundBox.isCollidingBottom() ){
                this.setVelY(1);
            }
		}

        debugger;
		this.setX(this.getX() + this.getVelX());
		this.setY(this.getY() + this.getVelY());
	};
}