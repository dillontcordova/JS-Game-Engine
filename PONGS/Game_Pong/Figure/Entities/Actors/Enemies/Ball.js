/**
 * Created by dillon_cordova on 12/14/2016.
 */
Polymorphism.inherits(Ball, Enemy);
function Ball(_x, _y, _width, _height, _acceleration) {
    Ball.super(this, arguments);

    AudioController.addAudio('Ball', 'res/SOUND/ballSound.wav');

    let collisionObj = this.getCollisionObj();
    let bounceSound = AudioController.getAudio('Ball');

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

    let super_tick = this.tick;
    this.tick = function (_actors) {
        super_tick.apply(this, arguments);

        let roomBoundBox = GameManager.getRoom().getBoundBox();
        if( !collisionObj.isWithinBounds(roomBoundBox) ){
            GameManager.resetLevel();
            if( collisionObj.escape(roomBoundBox) == CollisionEnum.RIGHT ){
                GameManager.incrementPlayer0GameScore();
            } else {
                GameManager.incrementPlayer1GameScore();
            }
        }
    };

    this.physics = function() {
		this.setX(this.getX() + this.getVelX());
		this.setY(this.getY() + this.getVelY());
	};
}