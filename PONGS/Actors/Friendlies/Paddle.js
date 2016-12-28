/**
 * Created by dillon_cordova on 12/3/2016.
 */
Polymorphism.inherits(Paddle, Friendly);
function Paddle(_x, _y, _width, _height, _speed) {
    Polymorphism.abstractClass(this, arguments);
	Friendly.apply(this, arguments);

	var collisionObj = this.getCollisionObj();
	var speed = _speed;
	var keyEnums = ActorController.input.getKeyEnums();
	var curScore = 0;

	this.subTick = function() {
	};
	
	this.physics = function() {
    };

	this.collidedWithObject = function(_otherCollision) {
	};

	this.tick = function(_actors, input) {
		collisionObj.checkCollision(this, _actors);

		if( input.isPressed(keyEnums.LEFT_ARROW) ) {
		}
		if( input.isPressed(keyEnums.UP_ARROW) ) {
			this.setY(this.getY() - speed);
		}
		if( input.isPressed(keyEnums.RIGHT_ARROW) ) {
		}

		if( input.isPressed(keyEnums.DOWN_ARROW) ) {
			this.setY(this.getY() + speed);
		}
	};

	this.getCurScore = function() {
		return curScore;
	};

	this.setCurScore = function(_curScore) {
		curScore = _curScore;
	};
}
