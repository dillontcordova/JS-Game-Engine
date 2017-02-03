/**
 * Created by dillon_cordova on 12/3/2016.
 */
Polymorphism.inherits(Actor, Entity);
function Actor(_x, _y, _width, _height, _speed) {
	Polymorphism.abstractClass(this, arguments);
    Actor.super(this, arguments);

    let velY = 0;
	let velX = _speed;
	let collisionObj = this.getCollisionObj();
	ActorController.addActor(this);

    //Abstract Methods:
	this.collidedWithObject = function(/*_otherCollision*/) {
		Polymorphism.abstractMethod(this);
	};
	this.physics = function (/*_actor*/) {
		Polymorphism.abstractMethod(this);
	};

	//Public Methods:
	this.tick = function(_actors) {
		collisionObj.checkCollision(this, _actors);
	};

	//Privileged Methods:
	this.getVelX = function () {
		return velX;
	};
	this.getVelY = function () {
		return velY;
	};
	this.setVelX = function (_velX) {
		velX = _velX;
	};
	this.setVelY = function (_velY) {
		velY = _velY;
	};
}