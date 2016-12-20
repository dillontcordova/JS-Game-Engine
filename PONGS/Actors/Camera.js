/**
 * Created by dillon_cordova on 12/13/2016.
 */
Polymorphism.inherits(Camera, Actor);
function Camera(_x, _y, _width, _height, _acceleration) {
	Actor.call(this, _x, _y, _width, _height, _acceleration);
	var curBoundBox = this.getCollision();

	this.getFillStyle = function() {
		return "red";
	};
	this.tickActor = function(_otherCollision) {
	};
	this.drawActor = function(_ctx) {
		_ctx.rect(this.getX(), this.getY(), this.getWidth(), this.getHeight());
		_ctx.stroke();
	};
	this.physics = function() {
	};
}