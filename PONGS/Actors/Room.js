/**
 * Created by dillon_cordova on 12/4/2016.
 */
function Room(_width, _height, _sectorSize) {
	Assert.is(isPowerOfTwo(_sectorSize), 'Not a proper sector size of a room. Must be a Power of 2!');
	Assert.is(_width % _sectorSize === 0, 'Not a proper resolution size for Width!');

	var gridMap = [];
	var width = _width;
	var height = _height;
	var subGridLength = 3;
	var sectorSize = _sectorSize;

	function isPowerOfTwo(int) {
		return ((int != 0) && !(int & (int - 1)));
	}

	(function () {
		var rowNum = width / sectorSize;
		var colNum = height / sectorSize;

		for(var i = 0, length = rowNum - 1; i < length; i++) {
			gridMap.push([]);
			for(var j = 0, len = colNum - 1; j < len; j++) {
				gridMap[i].push({});
			}
		}
	})();

	this.roundToSector = function(x, y) {
		var rowNumber = Math.round(x / sectorSize);
		var columnNumber = Math.round(y / sectorSize);
		return gridMap[rowNumber][columnNumber];
	};

	this.getSurroundingSubGrid = function(_sectorIndex) {
		var subGrid = [];
		var lastRowNum = _sectorIndex.rowNum + subGridLength;
		var lastColumnNum = _sectorIndex.columnNum + subGridLength;

		for(var a = 0, i = _sectorIndex.rowNum - 1; i < lastRowNum-1; i++, a++) {
			subGrid.push([]);
			for(var j = _sectorIndex.columnNum - 1; j < lastColumnNum-1; j++) {
				subGrid[a].push( gridMap[i][j] );
			}
		}
		return subGrid;
	};

	this.setSector = function(_actor) {
		Assert.is( _actor instanceof Actor, '!');
		var actorBox = _actor.getCollisionBoundBox();

		// gridMap[sectorPositionA.rowNum][sectorPositionA.columnNum].setActor(_actor);
		// gridMap[actorSectorPos.rowNum][actorSectorPos.columnNum].object = null;
	};
	
	/*this.getSectorsBetween = function(_sectorElementsA, _sectorElementsB) {
		var sectors = [];
		var rowNum = _sectorElementsA.rowNum;
		var colNum = _sectorElementsA.columnNum;
		var rowsToTraverse = _sectorElementsB.rowNum - rowNum;
		var columnsToTraverse = _sectorElementsB.columnNum - colNum;
		
		if(rowsToTraverse != 0) {
			for(var i = rowNum, rowEnd = rowNum + rowsToTraverse; i <= rowEnd; i++) {
				sectors.push( gridMap[i][colNum] );
			}
		} else if(columnsToTraverse != 0) {
			for(var j = colNum, colEnd = colNum + columnsToTraverse; j <= colEnd; j++) {
				sectors.push( gridMap[rowNum][j] );
			}
		}
		return sectors;
	};*/
}