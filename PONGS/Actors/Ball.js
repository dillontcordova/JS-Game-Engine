/**
 * Created by dillon_cordova on 1/4/2016.
 */
Polymorphism.inherits(Ball, Actor);
function Ball(_x, _y, _width, _height, _acceleration) {
	Actor.call(this, _x, _y, _width, _height, _acceleration);
	var curBoundBox = this.getCollision();

	this.getFillStyle = function() {
		return "orange";
   	};
	this.tickActor = function(_room) {
		debugger;
		this.physics();
		// curBoundBox.checkCollision ( _otherCollision );
		
		var proximityGrid = _room.getGridAroundSector(this.getSectorPosition());
		for (var i = proximityGrid.length - 1; i >= 0; i--) {
			for (var j = proximityGrid[i].length - 1; j >= 0; j--) {
				if(proximityGrid[i][j].object && proximityGrid[i][j].object !== this) {
					curBoundBox.checkCollision( proximityGrid[i][j].object.getCollision() );
				}
			}
		}
	};
	this.drawActor = function(_ctx) {
		_ctx.fillRect( this.getX(), this.getY(), this.getWidth(), this.getHeight() );
	};

	this.physics = function() {
		if( curBoundBox.isColliding() ){
			if( curBoundBox.isCollidingLeft() || curBoundBox.isCollidingRight() ){
				this.setVelX(-this.getVelX());
			}
			if( curBoundBox.isCollidingTop() ){
				this.setVelY(-1);
			}
			if( curBoundBox.isCollidingBottom() ){
				this.setVelY(1);
			}
		}

		this.setX(this.getX() + this.getVelX());
		this.setY(this.getY() + this.getVelY());
	};
}