/**
 * Created by dillon_cordova on 4/20/2016.
 */
function Sector(_x, _y, _width, _height) {
	var quadrants		= {};
	var box				= new Collision(new Point(_x, _y), _width, _height).getBoundBox();

	(function constructor(){
		quadrants = addQuadrants(box.left, box.top, box.right / 2, box.bottom / 2);
	})();

	function addQuadrants(_left, _top, _quadrantWidth, _quadrantHeight) {
		return {
			topLeft: {
				subSector: null,
				box: new Collision(new Point(_left, _top), _quadrantWidth, _quadrantHeight).getBoundBox()
			},
			botLeft: {
				subSector: null,
				box: new Collision(new Point(_left, _top + _quadrantHeight), _quadrantWidth, _quadrantHeight).getBoundBox()
			},
			topRight: {
				subSector: null,
				box: new Collision(new Point(_left + _quadrantWidth, _top), _quadrantWidth, _quadrantHeight).getBoundBox()
			},
			botRight: {
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
			var xThing = 0;
			var yThing = 0;
			var sub = quadrants[key];
			if(sub.subSector){
				sub.subSector.addSubSectorLayer();
			} else {
				var subBox = sub.box;
				var height = subBox.bottom / 2;
				var width = subBox.right / 2;

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
				sub.subSector = new Sector(subBox.left + xThing, subBox.top + yThing, width, height);
			}
		}
	};
	this.getQuadrants = function () {
		return quadrants;
	}
}