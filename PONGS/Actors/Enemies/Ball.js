/**
 * Created by dillon_cordova on 12/4/2016.
 */
Polymorphism.inherits(Ball, Enemy);
function Ball(_x, _y, _width, _height, _acceleration) {
	Enemy.call(this, _x, _y, _width, _height, _acceleration);
	var curBoundBox = this.getCollisionObj();

	this.getFillStyle = function() {
		return "orange";
   	};

    this.collidedWithObject = function(_otherCollision) {
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

		this.setX(this.getX() + this.getVelX());
		this.setY(this.getY() + this.getVelY());
	};
}