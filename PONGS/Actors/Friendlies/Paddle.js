/**
 * Created by dillon_cordova on 12/3/2016.
 */
Polymorphism.inherits(Paddle, Friendly);
function Paddle(_x, _y, _width, _height, _speed) {
    Polymorphism.abstractClass(this, arguments);
	Friendly.apply(this, arguments);

    let curScore = 0;
    let speed = _speed;
    let collisionObj = this.getCollisionObj();
    let keyEnums = ActorController.input.getKeyEnums();

    this.movedUp = function movedUp(/*_input, _keyEnums*/) {
        Polymorphism.abstractMethod(this);
    };
    this.movedDown = function movedDown(/*_input, _keyEnums*/) {
        Polymorphism.abstractMethod(this);
    };

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
		if( this.movedUp(input, keyEnums) ) {
			this.setY(this.getY() - speed);
		}
		if( input.isPressed(keyEnums.RIGHT_ARROW) ) {
		}

		if( this.movedDown(input, keyEnums) ) {
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
