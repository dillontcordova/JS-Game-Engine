Polymorphism.inherits(Ball, Actor);
function Ball(_x, _y, _width, _height, _acceleration) {
	Actor.call(this, _x, _y, _width, _height, _acceleration);

	this.getFillStyle = function() {
		return "orange";
   	};	
	this.drawActor = function(_ctx) {
		_ctx.fillRect( this.getX(), this.getY(), this.getWidth(), this.getHeight() );
	};
	this.tickActor = function(_actor) {
		this.physics();
		this.collision();
	};

	this.physics = function() {
		var x = this.getX();
		var y = this.getY();
		var velX = this.getVelX();
		var velY = this.getVelY();
		var accel = this.getAcceleration();
		this.setX(x + velX);
		this.setY(y + velY);

	};
	this.collision = function() {
		var curBoundBox = this.getBoundBox();
		var otherBoundBox = _actor.getBoundBox();
		var strHitDirection = curBoundBox.checkCollision ( otherBoundBox );
		if( !!strHitDirection ) {
			var asd = curBoundBox.getBoundPoint( strHitDirection );
		}
		this.getBoundBox();
	}
}