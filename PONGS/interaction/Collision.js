/**
 * Created by dillon_cordova on 1/4/2016.
 */
function Collision(_x, _y, _width, _height) {
	var boundBox;
	var curHitBound;
	var curHitDirection;

	curHitDirection = '';
	boundBox = new BoundBox(_x, _y, _width, _height);

	this.checkCollision = function(_otherBox) {
		Assert.is( _otherBox instanceof BoundBox, 'Can not obtain bound box when object is not an instanceof: "BoundBox"!');

		var hitStr = '';
		var curBoundPoints = boundBox.getAllBounds();
		var otherBoundPoints = _otherBox.getAllBounds();

		if( curBoundPoints.top <= otherBoundPoints.bottom) {
			hitStr = CollisionEnum.TOP;
		}
		if( curBoundPoints.bottom >= otherBoundPoints.top ) {
			hitStr = CollisionEnum.BOTTOM;
		}

		if( curBoundPoints.left <= otherBoundPoints.right ) {
			hitStr += CollisionEnum.LEFT;
		}
		if( curBoundPoints.right >= otherBoundPoints.left ) {
			hitStr += CollisionEnum.RIGHT;
		}

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