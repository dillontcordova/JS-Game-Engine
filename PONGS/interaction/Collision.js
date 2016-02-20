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
	var usingPixelPerfect = _usingPixelPerfect || false;
	var xyPointClone = new Point(_xyPoint.getX(), _xyPoint.getY());

	this.getBoundBox = function() {
		return {
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
		var verticalAlign = false;
		var horizontalAlign = false;
		var boundBox = this.getBoundBox();
		otherBoundBox = _otherCollision.getBoundBox();

		xyPointClone.setX(xyPoint.getX());
		xyPointClone.setY(xyPoint.getY());

		if( boundBox.top <= otherBoundBox.bottom && boundBox.top >= otherBoundBox.top ) {
			verticalAlign = true;
			if( boundBox.bottom >= otherBoundBox.bottom) {
				curHitDirection |= CollisionEnum.TOP;
				xyPointClone.setY(otherBoundBox.bottom);
				xyPointClone.lockPoint();
			}
		}
		if( boundBox.bottom >= otherBoundBox.top && boundBox.bottom <= otherBoundBox.bottom ) {
			verticalAlign = true;
			if( boundBox.top <= otherBoundBox.top) {
				debugger;
				curHitDirection |= CollisionEnum.BOTTOM;
				xyPointClone.setY(otherBoundBox.top - height);
				xyPointClone.lockPoint();
			}
		}
		if( boundBox.left <= otherBoundBox.right && boundBox.left >= otherBoundBox.left ) {
			horizontalAlign = true;
			if( boundBox.right >= otherBoundBox.right) {
				curHitDirection |= CollisionEnum.LEFT;
				xyPointClone.setX(otherBoundBox.right);
				xyPointClone.lockPoint();
			}
		}
		if( boundBox.right >= otherBoundBox.left && boundBox.right <= otherBoundBox.right ) {
			horizontalAlign = true;
			if( boundBox.left <= otherBoundBox.left) {
				curHitDirection |= CollisionEnum.RIGHT;
				xyPointClone.setX(otherBoundBox.left - width);
				xyPointClone.lockPoint();
			}
		}

		if(verticalAlign && horizontalAlign) {
			xyPoint.setX(xyPointClone.getX());
			xyPoint.setY(xyPointClone.getY());
			isColliding = true;
		} else {
			curHitDirection = 0;
		}
		xyPointClone.unlockPoint();
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
}