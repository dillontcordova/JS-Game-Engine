function Collision(_x, _y, _width, _height) {
	var boundBox;
	var curHitBound;
	var curHitDirection;

	curHitDirection = '';
	boundBox = new BoundBox(_x, _y, _width, _height);

	this.checkCollision = function(_otherBox) {
		Assert.is( _otherBox instanceof BoundBox, 'Can not obtain bound box when object is not an instanceof: "BoundBox"!');

		var verticalHitDirection = '';
		var horizontalHitDirection = '';
		var curBoundPoints = boundBox.getAllBounds();
		var otherBoundPoints = _otherBox.getAllBounds();

		if( otherBoundPoints.bottom >= curBoundPoints.top ) {
			verticalHitDirection = 'top';
		}
		if( otherBoundPoints.right >= curBoundPoints.left ) {
			horizontalHitDirection = 'left';
		}
		if( otherBoundPoints.left <= curBoundPoints.right ) {
			horizontalHitDirection = 'right';
		}
		if( otherBoundPoints.top <= curBoundPoints.bottom ) {
			verticalHitDirection = 'bottom';
		}
		// curBoundPoints.topLeft
		// curBoundPoints.topRight
		// curBoundPoints.bottomLeft
		// curBoundPoints.bottomRight
		
		// otherBoundPoints.topLeft
		// otherBoundPoints.topRight
		// otherBoundPoints.bottomLeft
		// otherBoundPoints.bottomRight
		var hitStr = verticalHitDirection + horizontalHitDirection;

		curHitDirection = hitStr;
		curHitBound = boundBox.getBoundPoint(hitStr);
	};

	this.getBoundBox = function() {
		return boundBox;
	};
	this.getCurHitBound = function() {
		return curHitBound;
	};
	this.getCurHitDirection = function() {
		return curHitDirection;

	}
}