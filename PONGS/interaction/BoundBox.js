/**
 * Created by dillon_cordova on 1/4/2016.
 */
function BoundBox(_x, _y, _width, _height) {
	var bounds;
	var x = _x;
	var y = _y;
	var width = _width;
	var height = _height;

	this.updateBounds = function(_x, _y) {
		return {
			top: _y,
			left: _x,
			right: (_x + width),
			bottom: (_y + height),
			topleft: new Point( [_x, _y] ),
			topright: new Point( [(_x + width), _y] ),
			bottomleft: new Point( [_x, (_y + height)] ),
			bottomright: new Point( [(_x + width), (_y + height)] )
		};
	};
	this.resetAllBounds = function(_x, _y, _width, _height) {
		return {
			top: y,
			left: x,
			right: (x + width),
			bottom: (y + height),
			topleft: new Point( [x, y] ),
			topright: new Point( [(x + width), y] ),
			bottomleft: new Point( [x, (y + height)] ),
			bottomright: new Point( [(x + width), (y + height)] )
		};
	};
	bounds = this.resetAllBounds = function(_x, _y, _width, _height);

	this.getAllBounds = function() {
		return bounds;
	};
	this.getBoundPoint = function(strDirection) {
		Assert.is(typeof strDirection === 'string', 'The Parameter must be of string type to find "BoundBox"\'s "boundPoint"!');
		return bounds[strDirection];
	};
}