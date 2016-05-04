/**
 * Created by dillon_cordova on 1/4/2016.
 */
function Collision(_xyPoint, _width, _height, _usingPixelPerfect) {
	var isColliding;
	var width = _width;
	var height = _height;
	var xyPoint = _xyPoint;
	var otherBoundBox = {};
	var curHitDirection = 0;
	var isContainedWithin = false;
	var usingPixelPerfect = _usingPixelPerfect || false;

	this.getBoundBox = function() {
		return {
			width: width,
			height: height,
			top: xyPoint.getY(),
			left: xyPoint.getX(),
			right: (xyPoint.getX() + width),
			bottom: (xyPoint.getY() + height)
		};
	};

	this.checkCollision = function(_otherCollision) {
		Assert.is( _otherCollision instanceof Collision, 'Can not obtain bound box when object is not an instanceof: "' + Collision.name + '"!');

		isColliding = false;
		curHitDirection = 0;
		isContainedWithin = false;
		var boundBox = this.getBoundBox();
		otherBoundBox = _otherCollision.getBoundBox();

		if( boundBox.top <= otherBoundBox.bottom &&
			boundBox.bottom >= otherBoundBox.top &&
			boundBox.right >= otherBoundBox.left &&
			boundBox.left <= otherBoundBox.right
		){
			if( boundBox.bottom >= otherBoundBox.bottom && boundBox.top >= otherBoundBox.top ) {
				curHitDirection |= CollisionEnum.TOP;
				xyPoint.setY(otherBoundBox.bottom);
				xyPoint.lockPoint();
				isColliding = true;
				//debugger;
			}
			if( boundBox.top <= otherBoundBox.top && boundBox.bottom <= otherBoundBox.bottom ) {
				curHitDirection |= CollisionEnum.BOTTOM;
				xyPoint.setY(otherBoundBox.top - height);
				xyPoint.lockPoint();
				isColliding = true;
				//debugger;
			}
			if( boundBox.right >= otherBoundBox.right && boundBox.left >= otherBoundBox.left ) {
				curHitDirection |= CollisionEnum.LEFT;
				xyPoint.setX(otherBoundBox.right);
				xyPoint.lockPoint();
				isColliding = true;
				//debugger;
			}
			if( boundBox.left <= otherBoundBox.left && boundBox.right <= otherBoundBox.right) {
				curHitDirection |= CollisionEnum.RIGHT;
				xyPoint.setX(otherBoundBox.left - width);
				xyPoint.lockPoint();
				isColliding = true;
				//debugger;
			}
			if( curHitDirection === 0 ) {
				isContainedWithin = true;
			}
		}
		xyPoint.unlockPoint();
	};

	this.isCollidingLeft = function() {
		return (curHitDirection & CollisionEnum.LEFT) != 0;
	};
	this.isCollidingRight = function() {
		return (curHitDirection & CollisionEnum.RIGHT) != 0;
	};
	this.isCollidingTop = function() {
		return (curHitDirection & CollisionEnum.TOP) != 0;
	};
	this.isCollidingBottom = function() {
		return (curHitDirection & CollisionEnum.BOTTOM) != 0;
	};
	this.isColliding = function() {
		return isColliding;
	};
	this.isContainedWithin = function() {
		return isContainedWithin;
	};
}