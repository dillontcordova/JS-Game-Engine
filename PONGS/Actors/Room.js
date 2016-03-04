/**
 * Created by dillon_cordova on 3/4/2016.
 */
function Camera(_width, _height) {
	Assert.is(isPowerOfTwo(_width), 'Not a proper width size of a room. Must be a Power of 2!');
	Assert.is(isPowerOfTwo(_height), 'Not a proper height size of a room. Must be a Power of 2!');

	var gridMap = [];
	var width = _width;
	var sectorSize = 32;
	var height = _height;

	function isPowerOfTwo(int) {
		return ((int != 0) && !(int & (int - 1)));
	}

	(function () {
		var rowsCount = height / sectorSize;
		var columnCount = width / sectorSize;
		for(var i = 0; i < rowsCount; i++) {
			gridMap.push([]);
			for(var j = 0; j < columnCount; j++) {
				gridMap[i].push({
					object: null
				});
			}
		}
	})();

	this.getSectorsBetween = function(x, y, secondX, secondY) {
		var sectors = [];
		var sectorElemsA = this.roundToSector(x, y);
		var sectorElemsB = this.roundToSector(secondX, secondY);
		var rowsToTraverse = sectorElemsA.rowNum - sectorElemsB.rowNum;
		var columnsToTraverse = sectorElemsA.columnNum - sectorElemsB.columnNum;

		if(rowsToTraverse != 0) {
			for(var i = sectorElemsA.rowNum; i < rowsToTraverse; i++) {
				sectors.push( gridMap[i][sectorElemsA.columnNum] );
			}
		} else if(columnsToTraverse != 0) {
			for(var j = sectorElemsA.rowNum; j < rowsToTraverse; j++) {
				sectors.push( gridMap[sectorElemsA.rowNum][j] );
			}
		}
		return sectors;
	};

	this.roundToSector = function(x, y) {
		var rowNumber = Math.round(x / sectorSize);
		var columnNumber = Math.round(y / sectorSize);
		return {
			rowNum: rowNumber,
			columnNum: columnNumber
		};
	};
	this.getSector = function(x, y) {
		var sectorPosition = this.roundToSector(x, y);
		return gridMap[sectorPosition.rowNum][sectorPosition.columnNum];
	};
	this.setSector = function(x, y) {
		var sectorPosition = this.roundToSector(x, y);
		return gridMap[sectorPosition.rowNum][sectorPosition.columnNum];
	};
}