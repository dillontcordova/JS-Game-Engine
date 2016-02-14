/**
 * Created by dillon_cordova on 1/4/2016.
 */
function Collision(_xyPoint, _width, _height, _usingPixelPerfect) {
	var isColliding;
	var width = _width;
	var height = _height;
	var xyPoint = _xyPoint;
	var curHitDirection = 0;
	var usingPixelPerfect = _usingPixelPerfect || false;

	this.getBoundBox = function() {
		return {
			top: xyPoint.getY(),
			left: xyPoint.getX(),
			right: (xyPoint.getX() + width),
			bottom: (xyPoint.getY() + height)
		};
	};

	this.checkCollision = function(_otherCollision) {
		Assert.is( _otherCollision instanceof Collision, 'Can not obtain bound box when object is not an instanceof: "Collision"!');

		isColliding = false;
		curHitDirection = 0;
		var verticalAlign = false;
		var horizontalAlign = false;
		var boundBox = this.getBoundBox();
		var otherBoundBox = _otherCollision.getBoundBox();

		if( boundBox.top <= otherBoundBox.bottom && boundBox.top >= otherBoundBox.top ) {
			curHitDirection |= CollisionEnum.TOP;
			verticalAlign = true;
		}
		if( boundBox.bottom >= otherBoundBox.top && boundBox.bottom <= otherBoundBox.bottom ) {
			curHitDirection |= CollisionEnum.BOTTOM;
			verticalAlign = true;
		}
		if( boundBox.left <= otherBoundBox.right && boundBox.left >= otherBoundBox.left ) {
			curHitDirection |= CollisionEnum.LEFT;
			horizontalAlign = true;
		}
		if( boundBox.right >= otherBoundBox.left && boundBox.right <= otherBoundBox.right ) {
			curHitDirection |= CollisionEnum.RIGHT;
			horizontalAlign = true;
		}

		if(verticalAlign && horizontalAlign) {
			isColliding = true;
			if( usingPixelPerfect ) {
				//TODO: pixel perfect logic here
			}
		}
	};

	this.isCollidingLeft = function() {
		return (curHitDirection & CollisionEnum.LEFT) != 0
	};
	this.isCollidingRight = function() {
		return (curHitDirection & CollisionEnum.RIGHT) != 0
	};
	this.isCollidingTop = function() {
		return (curHitDirection & CollisionEnum.TOP) != 0
	};
	this.isCollidingBottom = function() {
		return (curHitDirection & CollisionEnum.BOTTOM) != 0
	};
	this.isColliding = function() {
		return isColliding;
	};
	this.getCurHitDirection = function() {
		return curHitDirection;

	}
}