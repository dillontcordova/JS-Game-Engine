/**
 * Created by dillon_cordova on 12/20/2016.
 */
function Sector(_x, _y, _width, _height) {
	var quadrants		= {};
	var box				= new Collision(new Point(_x, _y), _width, _height).getBoundBox();

	(function constructor(){
		quadrants = addQuadrants(box.left, box.top, (box.width) / 2, (box.height) / 2);
	})();

	function addQuadrants(_left, _top, _quadrantWidth, _quadrantHeight) {
		return {
			topLeft: {
				actors: [],
				subSector: null,
				box: new Collision(new Point(_left, _top), _quadrantWidth, _quadrantHeight).getBoundBox()
			},
			botLeft: {
				actors: [],
				subSector: null,
				box: new Collision(new Point(_left, _top + _quadrantHeight), _quadrantWidth, _quadrantHeight).getBoundBox()
			},
			topRight: {
				actors: [],
				subSector: null,
				box: new Collision(new Point(_left + _quadrantWidth, _top), _quadrantWidth, _quadrantHeight).getBoundBox()
			},
			botRight: {
				actors: [],
				subSector: null,
				box: new Collision(new Point(_left + _quadrantWidth, _top + _quadrantHeight), _quadrantWidth, _quadrantHeight).getBoundBox()
			}
		};
	}

	this.addSubSectorLayers = function (layerAmount) {
		if(!layerAmount) {
			layerAmount = 1;
		}
		for(var i = 0; i < layerAmount; i++) {
			this.addSubSectorLayer()
		}
	};
	this.addSubSectorLayer = function () {
		for(var key in quadrants) {
			var curQuadrant = quadrants[key];
			var subSector = curQuadrant.subSector;
			if(subSector) {
				subSector.addSubSectorLayer();
			} else {
				var xThing = 0;
				var yThing = 0;
				var curQuadrantBox = curQuadrant.box;
				var height = curQuadrantBox.bottom / 2;
				var width = curQuadrantBox.right / 2;

				switch (key) {
					case 'botLeft':
						yThing = height;
						break;
					case 'topRight':
						xThing = width;
						break;
					case 'botRight':
						yThing = height;
						xThing = width;
						break;
				}
				curQuadrant.subSector = new Sector(curQuadrantBox.left + xThing, curQuadrantBox.top + yThing, width, height);
			}
		}
	};

	this.isContainedWithin = function (_actorBox, _quadrantBox) {
		var isBigger = _actorBox.width > _quadrantBox.width && _actorBox.height > _quadrantBox.height;
		return	!isBigger							 &&
				_actorBox.top <= _quadrantBox.bottom &&
				_actorBox.bottom >= _quadrantBox.top &&
				_actorBox.right >= _quadrantBox.left &&
				_actorBox.left <= _quadrantBox.right;
	};
	this.setCheckAreas = function (_actorBox, _dfg) {
		debugger;
		for(var key in quadrants) {
			var curQuadrant = quadrants[key];
			var curQuadrantBox = curQuadrant.box;
			if( this.isContainedWithin(_actorBox, curQuadrantBox) ){
				var subSector = curQuadrant.subSector;
				if(subSector) {
					subSector.setCheckAreas(_actorBox);
				} else {
					curQuadrant.actors.push(_actorBox);
				}
				// curQuadrant.actors.find(function(poop) {
				// 	return poop.poop == 6
				// });
			}
		}
		return quadrants;
	};
	this.getQuadrants = function () {
		return quadrants;
	}
}