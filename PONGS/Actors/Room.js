/**
 * Created by dillon_cordova on 2/13/2016.
 */
Polymorphism.inherits(Room, Actor);
function Room(_x, _y, _width, _height, _acceleration) {
    Actor.call(this, _x, _y, _width, _height, _acceleration);
	Assert.is(isPowerOfTwo(_width), '!');
	Assert.is(isPowerOfTwo(_height), '!');

	var gridMap = [];
	var width = _width;
	var sectorSize = 32;
	var height = _height;

	(function () {
		var rowsCount = height / sectorSize;
		var columnCount = width / sectorSize;
		for(var i = 0; i < rowsCount; i++) {
			gridMap.push([]);
			for(var j = 0; j < columnCount; j++) {
				gridMap[i].push({
					actor: null,
					object: null
				});
			}
		}
	})();

	function isPowerOfTwo(int) {
		return ((int != 0) && !(int & (int - 1)));
	}

	this.getSectorsBetween = function(x, y, secondX, secondY) {
		var sectorElemsA = this.roundToSector(x, y);
		var sectorElemsB = this.roundToSector(secondX, secondY);
		var rowsToTraverse = sectorElemsA.row - sectorElemsB.row;
		var columnsToTraverse = sectorElemsA.column - sectorElemsB.column;
		if(rowsToTraverse != 0) {
			var sectors = [];
			for(var i = 0; i < rowsToTraverse; i++) {
				sectors.push( gridMap[sectorElemsA.row][sectorElemsA.column] );
			}
		} else if(columnsToTraverse != 0) {

		}
	};
	this.roundToSector = function(x, y) {
		var row = Math.round(x / sectorSize);
		var column = Math.round(y / sectorSize);
		return {
			row: row,
			column: column
		};
	};
	this.getSector = function(x, y) {
		var sectorElems = this.roundToSector(x, y);
		return gridMap[sectorElems.row][sectorElems.column];
	};



    this.getFillStyle = function() {
        return "red";
    };
    this.tickActor = function(_otherCollision) {
    };

    this.drawActor = function(_ctx) {
        _ctx.rect(this.getX(), this.getY(), this.getWidth(), this.getHeight());
        _ctx.stroke();
    };

    this.physics = function() {
    };
}