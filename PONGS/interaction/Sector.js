/**
 * Created by dillon_cordova on 4/20/2016.
 */
function Sector(_x, _y, _width, _height) {

	var quadrantWidth		= _width / 2;
	var quadrantHeight		= _height / 2;
	var topLeftQuadrant		= new Collision(new Point(_x, _y), quadrantWidth, quadrantHeight );
	var topRightQuadrant	= new Collision(new Point(_x + quadrantWidth, _y), quadrantWidth, quadrantHeight );
	var botLeftQuadrant		= new Collision(new Point(_x, _y + quadrantHeight), quadrantWidth, quadrantHeight );
	var botRightQuadrant	= new Collision(new Point(_x + quadrantWidth, _y + quadrantHeight), quadrantWidth, quadrantHeight );

	(function(){

	})();

	this.addSubSector = function (_actor) {

	};

	var curActor = null;
	var surroundingArea = {};
	var surroundingAreaPoints = {};
	var sectorPosition = {
		rowNum: _rowNum,
		columnNum: _colNum
	};

	this.getActor = function () {
		return curActor;
	};
	this.getSurroundingArea = function () {
	};

	this.setActor = function (_actor) {
		Assert.is(_actor instanceof Actor, '!');
		_actor.setSectorPosition(sectorPosition);
		curActor = _actor;
	};
	this.setSector = function (_coordinates) {
		
	}
}