/**
 * Created by dillon_cordova on 12/13/2016.
 */
Polymorphism.inherits(Camera, Actor);
function Camera(_x, _y, _width, _height, _acceleration) {
	Actor.call(this, _x, _y, _width, _height, _acceleration);
	let curBoundBox = this.getCollisionObj();

	this.getFillStyle = function() {
		return "red";
	};
	this.tickActor = function(_otherCollision) {
	};
	this.physics = function() {
	};
}