/**
 * Created by dillon_cordova on 1/4/2016.
 */
function Point(_coordinates) {
	Assert.is(_coordinates instanceof Array, 'Point must be defined by an array object!');
	Assert.is(_coordinates.length > 0 && _coordinates.length < 4, 'The length of the array can be no longer more than 3 coordinate points! ex:(x, y, z)');
	
	var x = _coordinates[0];
	var y = _coordinates[1];
	var z = _coordinates[2];

	this.updatePoint = function(_newCoordinates) {
		Assert.is(_coordinates instanceof Array, 'Point must be defined by an array object!');
		x = _newCoordinates[0];
		y = _newCoordinates[1];
		z = _newCoordinates[2];
	};
	this.getX = function() {
		return x;
	};
	this.getY = function() {
		return y;
	};
	this.getZ = function() {
		return z;
	};
}