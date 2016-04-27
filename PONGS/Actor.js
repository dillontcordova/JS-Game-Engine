/**
 * Created by dillon_cordova on 1/3/2016.
 */
function Actor(_x, _y, _width, _height, _acceleration) {
	Polymorphism.abstractClass(this, arguments);

	var velX = 2;
	var velY = 0;
	var width = _width;
	var height = _height;
	var xy = new Point( _x, _y);
	var sectorPosition = {rowNum: 0, columnNum: 0};
	var collision = new Collision(xy, width, height);

	this.tick = function (_canvasHeight, _canvasWidth, _input, _room) {
		this.tickActor(_room);
		_room.setSector(this);
		// for (var i = _actors.length - 1; i >= 0; i--) {
		// 	if (this !== _actors[i]) {
		// 		this.tickActor(_actors[i].getCollision());
		// 	}
		// }
	};

	this.draw = function (_ctx) {
		_ctx.fillStyle = this.getFillStyle();
		this.drawActor(_ctx);
	};

	this.collision = function (/*_actor*/) {
		Polymorphism.abstractMethod(this);
	};

	this.getSectorPosition = function () {
		return sectorPosition;
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
		return collision;
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


	this.setSectorPosition = function (_sectorPosition) {
		sectorPosition = _sectorPosition;
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