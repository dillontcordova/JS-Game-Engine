/**
 * Created by dillon_cordova on 12/4/2016.
 */
Polymorphism.inherits(Ball, Enemy);
function Ball(_x, _y, _width, _height, _acceleration) {
	Enemy.call(this, _x, _y, _width, _height, _acceleration);
    var collisionObj = this.getCollisionObj();
    var canvasHeight = Game.getCanvasHeight();
    var canvasWidth = Game.getCanvasWidth();

    this.getFillStyle = function() {
		return "orange";
   	};

    this.collidedWithObject = function(_otherCollision) {
    };

    this.subTick = function(_actors) {
        if( collisionObj.isOutsideOf(Game.getRoom().getBoundBox()) ){
            Game.init();
        }
    };

    this.physics = function() {
		if( collisionObj.isColliding() ){
            if( collisionObj.isCollidingLeft() || collisionObj.isCollidingRight() ){
                this.setVelX(-this.getVelX());
            }
            if( collisionObj.isCollidingTop() ){
                this.setVelY(1);
            }
            if( collisionObj.isCollidingBottom() ){
                this.setVelY(-1);
            }
		}

		this.setX(this.getX() + this.getVelX());
		this.setY(this.getY() + this.getVelY());
	};
}