//Abstract
function Actor(_x, _y, _width, _height, _acceleration) {
	Polymorphism.abstractClass(this, arguments);

	var x;
	var y;
	var VelX;
	var VelY;
	var width;
	var height;
	var boundBox;
	var acceleration;

	(function() {
		x = _x;
		y = _y;
		VelX = 0;
		VelY = 0;
		width = _width;
		height = _height;
		acceleration = _acceleration;
		boundBox = new BoundBox(this);
		// collision = new Collision(this); //TODO: add this as a class instead later to gain more information on the collision
	})();


	this.tick = function(_canvasHeight, _canvasWidth, _input, _actors) {
		for (var i = _actors.length - 1; i >= 0; i--) {
			this.tickActor(_actors[i]);
		}
	};
	this.draw = function(_ctx, _canvasHeight, _canvasWidth) {
		_ctx.fillStyle = this.getFillStyle();
		this.drawActor(_ctx);
	};

	this.collision = function(_actor) {
		var curBoundBox = this.getBoundBox();
		var otherBoundBox = _actor.getBoundBox();
		var strHitDirection = curBoundBox.checkCollision ( otherBoundBox );
		if( !!strHitDirection ) {
			var asd = curBoundBox.getBoundPoint( strHitDirection );
		}
	};
	
	this.getX = function() {
		return x;
    };
    this.getY = function() {
		return y;
    };
	this.getVelX = function() {
		return velX;
	};
    this.getVelY = function() {
		return velY;
    };
    this.getAcceleration = function() {
		return acceleration;
    };
    this.getWidth = function() {
		return width;
    };
    this.getHeight = function() {
		return height;
    };
    this.getBoundBox = function() {
		return boundBox;
    };
    this.getFillStyle = function() {
		Polymorphism.abstractMethod(this);
	};
	this.drawActor = function(/*_ctx*/) {
		Polymorphism.abstractMethod(this);
	};
	this.tickActor = function(/*_actor*/) {
		Polymorphism.abstractMethod(this);
	};


    this.setX = function(__x) {
		x = __x;
    };
    this.setY = function(__y) {
		y = __y;
    };
    this.setVelX = function(_velX) {
		velY = _velY;
	};
    this.setVelY = function(_velY) {
		velY = _velY;
    };
    this.setacceleration = function(__acceleration) {
    	acceleration = __acceleration;
    };
}