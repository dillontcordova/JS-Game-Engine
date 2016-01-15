/**
 * Created by dillon_cordova on 1/4/2016.
 */
function Collision(_x, _y, _width, _height) {
	var curHitBound;
	var width = _width;
	var height = _height;
	var curHitDirection = '';
	var boundBox = {
		top: _y,
		left: _x,
		right: (_x + _width),
		bottom: (_y + _height),
		topleft: new Point( [_x, _y] ),
		topright: new Point( [(_x + _width), _y] ),
		bottomleft: new Point( [_x, (_y + _height)] ),
		bottomright: new Point( [(_x + _width), (_y + _height)] )
	};

	this.checkCollision = function(_otherCollision) {
		Assert.is( _otherCollision instanceof Collision, 'Can not obtain bound box when object is not an instanceof: "BoundBox"!');

		var hitStr = '';
		var curBoundPoints = boundBox;
		var otherBoundPoints = _otherCollision.getBoundBox();

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
		curHitBound = boundBox[hitStr];
	};

	this.updateBounds = function(_x, _y) {
		boundBox.top = _y;
		boundBox.left = _x;
		boundBox.right = (_x + width);
		boundBox.bottom = (_y + height);
		boundBox.topleft.updatePoint( [_x, _y] );
		boundBox.topright.updatePoint( [(_x + width), _y] );
		boundBox.bottomleft.updatePoint( [_x, (_y + height)] );
		boundBox.bottomright.updatePoint( [(_x + width), (_y + height)] );
	};
	this.getBoundPoint = function(strDirection) {
		Assert.is(typeof strDirection === 'string', 'The Parameter must be of string type to find "BoundBox"\'s "boundPoint"!');
		return boundBox[strDirection];
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