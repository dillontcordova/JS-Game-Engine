/**
 * Created by dillon_cordova on 1/3/2016.
 */
function Actor(_x, _y, _width, _height, _acceleration) {
	Polymorphism.abstractClass(this, arguments);

	var x = _x;
	var y = _y;
	var velX = 1;
	var velY = 0;
	var width = _width;
	var height = _height;
	var acceleration = _acceleration;
	var collision = new Collision(x, y, width, height);

	this.tick = function (_canvasHeight, _canvasWidth, _input, _actors) {
		for (var i = _actors.length - 1; i >= 0; i--) {
			if (this !== _actors[i]){
				this.tickActor(_actors[i]);
			}
		}
	};
	this.draw = function (_ctx, _canvasHeight, _canvasWidth) {
		_ctx.fillStyle = this.getFillStyle();
		this.drawActor(_ctx);
	};

	this.collision = function (/*_actor*/) {
		Polymorphism.abstractMethod(this);
	};

	this.getX = function () {
		return x;
	};
	this.getY = function () {
		return y;
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
		return collision;
	};
	this.getAcceleration = function () {
		return acceleration;
	};
	this.getFillStyle = function () {
		Polymorphism.abstractMethod(this);
	};
	this.drawActor = function (/*_ctx*/) {
		Polymorphism.abstractMethod(this);
	};
	this.tickActor = function (/*_actor*/) {
		Polymorphism.abstractMethod(this);
	};


	this.setX = function (__x) {
		x = __x;
	};
	this.setY = function (__y) {
		y = __y;
	};
	this.setVelX = function (_velX) {
		velX = _velX;
	};
	this.setVelY = function (_velY) {
		velY = _velY;
	};
	this.setacceleration = function (__acceleration) {
		acceleration = __acceleration;
	};
}