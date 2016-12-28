/**
 * Created by dillon_cordova on 12/14/2016.
 */
function Collision(_xyPoint, _width, _height, _usingPixelPerfect) {
	var boundBox;
	var isColliding;
	var width = _width;
	var height = _height;
	var xyPoint = _xyPoint;
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

    this.resetCollision = function() {
        isColliding = false;
        curHitDirection = 0;
        isContainedWithin = false;
    };

	this.checkCollision = function(_mainActor, _actorList) {
		var mainActorCollision = _mainActor.getCollisionObj();
		for(var i = 0, len = _actorList.length; i < len; ++i) {
			var otherActor = _actorList[i];
			if(_mainActor != otherActor) {
				var otherActorCollision = otherActor.getCollisionObj();
				if(mainActorCollision.isCollidingWith(otherActorCollision)) {
					_mainActor.collidedWithObject(otherActor, otherActorCollision);
					otherActor.collidedWithObject(_mainActor, mainActorCollision);
					return true;
				}
			}
		}
	};

	this.isWithinBounds = function(_otherBoundBox) {
		return (boundBox.top < _otherBoundBox.bottom &&
		boundBox.bottom > _otherBoundBox.top &&
		boundBox.right > _otherBoundBox.left &&
		boundBox.left < _otherBoundBox.right);
	};

	this.escape = function(_otherBoundBox) {
		if( boundBox.right > _otherBoundBox.right && boundBox.left >= _otherBoundBox.left ) {
			return CollisionEnum.RIGHT;
		}
		return CollisionEnum.LEFT;
	};

	this.isCollidingWith = function(_otherCollision) {
		Assert.is( _otherCollision instanceof Collision, 'Can not obtain bound box when object is not an instanceof: "' + Collision.name + '"!');

		this.resetCollision();
		boundBox = this.getBoundBox();
		var otherBoundBox = _otherCollision.getBoundBox();

		if( this.isWithinBounds(otherBoundBox) ){
			isColliding = true;
            
			if( boundBox.bottom > otherBoundBox.bottom && boundBox.top >= otherBoundBox.top ) {
				curHitDirection |= CollisionEnum.TOP;
				//debugger;
			}
			if( boundBox.top < otherBoundBox.top && boundBox.bottom <= otherBoundBox.bottom ) {
				curHitDirection |= CollisionEnum.BOTTOM;
				//debugger;
			}
			if( boundBox.right > otherBoundBox.right && boundBox.left >= otherBoundBox.left ) {
				curHitDirection |= CollisionEnum.LEFT;
				//debugger;
			}
			if( boundBox.left < otherBoundBox.left && boundBox.right <= otherBoundBox.right) {
				curHitDirection |= CollisionEnum.RIGHT;
				//debugger;
			}
			if( curHitDirection === 0 ) {
				isContainedWithin = true;
			}
		}
		xyPoint.unlockPoint();
		return isColliding;
	};

    this.correctCollision = function(_otherBoundBox) {
        if((curHitDirection & CollisionEnum.TOP) != 0) {
            xyPoint.setY(_otherBoundBox.bottom);
            xyPoint.lockPoint();
        }else if((curHitDirection & CollisionEnum.BOTTOM) != 0) {
            xyPoint.setY(_otherBoundBox.top - height);
            xyPoint.lockPoint();
        } else if((curHitDirection & CollisionEnum.LEFT) != 0) {
            xyPoint.setX(_otherBoundBox.right);
            xyPoint.lockPoint();
        } else if((curHitDirection & CollisionEnum.LEFT) != 0) {
            xyPoint.setX(_otherBoundBox.left - width);
            xyPoint.lockPoint();
        }
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
	this.isContainedWithin = function() {
		return isContainedWithin;
	};
	this.isColliding = function() {
		return isColliding;
	};
}