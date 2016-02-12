/**
 * Created by dillon_cordova on 1/4/2016.
 */
function Collision(_xyPoint, _width, _height) {
	var isColliding;
	var width = _width;
	var height = _height;
	var xyPoint = _xyPoint;
	var curHitDirection = 0;

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
			// A collision took place
			isColliding = true;
		}
	};

	this.getIsColliding = function() {
		return isColliding;
	};
	this.getCurHitDirection = function() {
		return curHitDirection;

	}
}