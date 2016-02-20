/**
 * Created by dillon_cordova on 1/4/2016.
 */
function Point(/*argumentsCoordinates*/) {
	Assert.is(arguments.length > 1 && arguments.length < 4, 'Point can only be defined by 2 or 3 coordinate values!');

	var x = 0;
	var y = 0;
	var z = 0;
	var isLocked = false;
	setCoordinates(arguments);

	function setCoordinates(_coordinates) {
		for(var i = 0, len = _coordinates.length; i < len; i++) {
			var coordinate =  _coordinates[i];
			var errorMsg = 'Argument number: "' + i + '"  when creating this point is not a number!';
			if(i != len-1) {
				Assert.is(typeof coordinate == 'number', errorMsg);
			} else {
				Assert.is(coordinate == undefined || typeof coordinate == 'number', errorMsg);
			}
		}
		x = _coordinates[0];
		y = _coordinates[1];
		z = _coordinates[2];
	}

	this.updatePoint = function(/*argumentsCoordinates*/) {
		if( !this.isPointLocked() ) {
			Assert.is(arguments.length > 1 && arguments.length < 4, 'Point can only be defined by 2 or 3 coordinate values!');
			setCoordinates(arguments);
		}
	};

	this.isPointLocked = function () {
		Assert.console('The Point: "' + this + '" is Locked and can not be altered until unlocked.', isLocked);
		return isLocked;
	};
	this.lockPoint = function() {
		isLocked = true;
	};
	this.unlockPoint = function() {
		isLocked = false;
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
	this.setX = function(_x) {
		if( !this.isPointLocked() ) {
			x = _x;
		}
	};
	this.setY = function(_y) {
		if( !this.isPointLocked() ) {
			y = _y;
		}
	};
	this.setZ = function(_z) {
		if( !this.isPointLocked() ) {
			z = _z;
		}
	};
}