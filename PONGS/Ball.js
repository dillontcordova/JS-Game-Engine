/**
 * Created by dillon_cordova on 1/4/2016.
 */
Polymorphism.inherits(Ball, Actor);
function Ball(_x, _y, _width, _height, _acceleration) {
	Actor.call(this, _x, _y, _width, _height, _acceleration);

	this.getFillStyle = function() {
		return "orange";
   	};
	this.tickActor = function(_actor) {
		this.physics();
		this.collision(_actor);
	};
	this.drawActor = function(_ctx) {
		_ctx.fillRect( this.getX(), this.getY(), this.getWidth(), this.getHeight() );
	};

	this.physics = function() {
		var curCollision = this.getCollision();
		//var curHitBound = curCollision.getCurHitBound();
		var curHitDirection = curCollision.getCurHitDirection();
		if( (curHitDirection & CollisionEnum.LEFT) || (curHitDirection & CollisionEnum.TOP_LEFT) || (curHitDirection & CollisionEnum.BOTTOM_LEFT) ){
			this.setVelX(-this.getVelX());
		}
		if( (curHitDirection & CollisionEnum.RIGHT) || (curHitDirection & CollisionEnum.TOP_RIGHT) || (curHitDirection & CollisionEnum.BOTTOM_RIGHT) ) {
			this.setVelX(-this.getVelX());
		}
		var velX = 1;
		var velY = this.getVelY();
		var accel = this.getAcceleration();

		this.setX(this.getX() + velX);
		this.setY(this.getY() + velY);

	};
	this.collision = function(_actor) {
		var curCollision = this.getCollision();
		var otherCollision = _actor.getCollision();
		curCollision.checkCollision ( otherCollision );
	}
}