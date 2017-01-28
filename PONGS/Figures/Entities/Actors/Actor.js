/**
 * Created by dillon_cordova on 12/3/2016.
 */
Polymorphism.inherits(Actor, Entity);
function Actor(_x, _y, _width, _height, _speed) {
	Polymorphism.abstractClass(this, arguments);
    Entity.apply(this, arguments);

    let xy = new Vector( _x, _y);
    RenderController.addView(this);

    let velY = 0;
	let velX = _speed;
	let width = _width;
	let height = _height;
	let collisionObj = new Collision(xy, width, height);

	ActorController.addActor(this);

    //Abstract Methods
	this.collidedWithObject = function(/*_otherCollision*/) {
		Polymorphism.abstractMethod(this);
	};
	this.physics = function (/*_actor*/) {
		Polymorphism.abstractMethod(this);
	};

	//Public Methods
	this.tick = function(_actors) {
		collisionObj.checkCollision(this, _actors);
	};

	//Privileged Methods
	this.getX = function () {
		return xy.getX();
	};
	this.getY = function () {
		return xy.getY();
	};
	this.getVelX = function () {
		return velX;
	};
	this.getVelY = function () {
		return velY;
	};
	this.getWidth = function () {
		return width;
	};
	this.getHeight = function () {
		return height;
	};
	this.getCollisionObj = function () {
		return collisionObj;
	};

	this.setX = function (__x) {
		xy.setX(__x);
	};
	this.setY = function (__y) {
		xy.setY(__y);
	};
	this.setVelX = function (_velX) {
		velX = _velX;
	};
	this.setVelY = function (_velY) {
		velY = _velY;
	};
}