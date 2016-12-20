/**
 * Created by dillon_cordova on 12/3/2016.
 */
function Actor(_x, _y, _width, _height, _acceleration) {
	Polymorphism.abstractClass(this, arguments);

	var velX = 2;
	var velY = 0;
	var width = _width;
	var height = _height;
	var xy = new Point( _x, _y);
	var collisionObj = new Collision(xy, width, height);
    this.tickActorCompare = {};

    this.collision = function(_otherCollision) {
        Polymorphism.abstractMethod(this);
    };
    this.physics = function (/*_actor*/) {
        Polymorphism.abstractMethod(this);
    };

	this.draw = function (_ctx) {
		_ctx.fillStyle = this.getFillStyle();
		this.drawActor(_ctx);
	};

	this.tick = function(_actors, _input) {
		this.getCollision().resetCollision();
        for(var i = _actors.length - 1; i >= 0; --i) {
			var curOtherActor = _actors[i];
            if(this != curOtherActor) {
                this.collision(curOtherActor.getCollision());
            }
        }
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
	this.getCollision = function () {
		return collisionObj;
	};
	this.getCollisionBoundBox = function () {
		return collisionObj.getBoundBox();
	};
	this.getFillStyle = function () {
		Polymorphism.abstractMethod(this);
	};
	this.drawActor = function (/*_ctx*/) {
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