/**
 * Created by dillon_cordova on 12/14/2016.
 */
Polymorphism.inherits(Ball, Enemy);
function Ball(_x, _y, _width, _height, _acceleration) {
	Enemy.call(this, _x, _y, _width, _height, _acceleration);
    let collisionObj = this.getCollisionObj();
    let bounceSound = new Audio('SOUND/ballSound.wav');

    this.getFillStyle = function() {
		return "white";
   	};

    this.collidedWithObject = function(_otherActor, _otherCollision) {
        if( collisionObj.isColliding() ){
            bounceSound.play();

            if( collisionObj.isCollidingLeft() || collisionObj.isCollidingRight() ){
                this.setVelX(-this.getVelX());
            }
            if( collisionObj.isCollidingTop() ){
                this.setVelY(1);
                this.setY(this.getY() + 1);
            }
            if( collisionObj.isCollidingBottom() ){
                this.setVelY(-1);
                this.setY(this.getY() - 1);
            }
        }
    };

    this.subTick = function(_actors) {
        //Ball.super.tick().call(this); // add later
        let roomBoundBox = Game.getRoom().getBoundBox();
        if( !collisionObj.isWithinBounds(roomBoundBox) ){
            Game.resetLevel();
            if( collisionObj.escape(roomBoundBox) == CollisionEnum.RIGHT ){
                Game.incrementPlayer0GameScore();
            } else {
                Game.incrementPlayer1GameScore();
            }
        }
    };

    this.physics = function() {
		this.setX(this.getX() + this.getVelX());
		this.setY(this.getY() + this.getVelY());
	};
}