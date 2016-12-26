/**
 * Created by dillon_cordova on 12/3/2016.
 */
function Actor(_x, _y, _width, _height, _speed) {
	Polymorphism.abstractClass(this, arguments);

	var velY = 0;
	var velX = _speed;
	var width = _width;
	var height = _height;
	var xy = new Point( _x, _y);
	var collisionObj = new Collision(xy, width, height);
	ActorController.addActor(this);

	//Abstract Methods
	this.subTick = function(/*_actors*/) {
		Polymorphism.abstractMethod(this);
	};
	this.collidedWithObject = function(/*_otherCollision*/) {
		Polymorphism.abstractMethod(this);
	};
	this.physics = function (/*_actor*/) {
		Polymorphism.abstractMethod(this);
	};
	this.getFillStyle = function () {
		Polymorphism.abstractMethod(this);
	};

	//Public Methods
	this.draw = function (_ctx) {
		_ctx.fillStyle = this.getFillStyle();
		this.drawActor(_ctx);
	};

	this.tick = function(_actors) {
		collisionObj.checkCollision(this, _actors);
		this.subTick();
	};

	this.drawActor = function(_ctx) {
		_ctx.fillRect( this.getX(), this.getY(), this.getWidth(), this.getHeight() );
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
	this.getCollisionBoundBox = function () {
		return collisionObj.getBoundBox();
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