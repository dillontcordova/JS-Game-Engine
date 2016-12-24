/**
 * Created by dillon_cordova on 12/3/2016.
 */
function Actor(_x, _y, _width, _height, _acceleration) {
	Polymorphism.abstractClass(this, arguments);

	var velX = 5;
	var velY = 0;
	var width = _width;
	var height = _height;
	var xy = new Point( _x, _y);
	var collisionObj = new Collision(xy, width, height);
	ActorController.addActor(this);

    this.physics = function (/*_actor*/) {
        Polymorphism.abstractMethod(this);
    };

	this.draw = function (_ctx) {
		_ctx.fillStyle = this.getFillStyle();
		this.drawActor(_ctx);
	};

	this.tick = function(_actors) {
		this.getCollisionObj().checkCollision(this, _actors);
	};

	this.drawActor = function(_ctx) {
		_ctx.fillRect( this.getX(), this.getY(), this.getWidth(), this.getHeight() );
	};

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
	this.getFillStyle = function () {
		Polymorphism.abstractMethod(this);
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