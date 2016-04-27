/**
 * Created by dillon_cordova on 4/20/2016.
 */
function Sector(_rowNum, _colNum) {
	this.addSector = function (_actor) {

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