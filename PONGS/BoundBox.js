function BoundBox(_x, _y, _width, _height) {
	var x = _x;
	var y = _y;
	var width = _width;
	var height = _height;
	var bounds = {
		top: y,
		left: x,
		right: (x + width),
		bottom: (y + height),
		topleft: new Point( [x, y] ),
		topright: new Point( [(x + width), y] ),
		bottomleft: new Point( [x, (y + height)] ),
		bottomright: new Point( [(x + width), (y + height)] )
	};

	this.getAllBounds = function() {
		return bounds;
	};

	this.getBoundPoint = function(strDirection) {
		Assert.is(typeof strDirection === 'string', 'The Parameter must be of string type to find "BoundBox"\'s "boundPoint"!');
		return bounds[strDirection];
	};
}