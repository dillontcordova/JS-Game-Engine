/**
 * Created by dillon_cordova on 1/4/2016.
 */
function BoundBox(_x, _y, _width, _height) {
	var bounds;
	var width = _width;
	var height = _height;

	this.updateBounds = function(_x, _y) {
		bounds.top = _y;
		bounds.left = _x;
		bounds.right = (_x + width);
		bounds.bottom = (_y + height);
		bounds.topleft.updatePoint( [_x, _y] );
		bounds.topright.updatePoint( [(_x + width), _y] );
		bounds.bottomleft.updatePoint( [_x, (_y + height)] );
		bounds.bottomright.updatePoint( [(_x + width), (_y + height)] );
	};
	this.resetAllBounds = function(_x, _y, _width, _height) {
		bounds = {
			top: _y,
			left: _x,
			right: (_x + _width),
			bottom: (_y + _height),
			topleft: new Point( [_x, _y] ),
			topright: new Point( [(_x + _width), _y] ),
			bottomleft: new Point( [_x, (_y + _height)] ),
			bottomright: new Point( [(_x + _width), (_y + _height)] )
		};
	};
	bounds = this.resetAllBounds(_x, _y, _width, _height);

	this.getAllBounds = function() {
		return bounds;
	};
	this.getBoundPoint = function(strDirection) {
		Assert.is(typeof strDirection === 'string', 'The Parameter must be of string type to find "BoundBox"\'s "boundPoint"!');
		return bounds[strDirection];
	};
}