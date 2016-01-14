function BoundBox(_actor) {
	Assert.is( _actor instanceof Actor, 'Can not obtain bound box when object is not an instanceof: "Actor"!');

	var bounds = {};
	(function() {
		var actorX = _actor.getX();
		var actorY = _actor.getY();
		var actorWidth = _actor.getWidth();
		var actorHeight = _actor.getHeight();

		bounds = {
			top: actorY,
			left: actorX,
			right: (actorX + actorWidth),
			bottom: (actorY + actorHeight),

			topleft: new Point( [actorX, actorY] ),
			topright: new Point( [(actorX + actorWidth), actorY] ),
			bottomleft: new Point( [actorX, (actorY + actorHeight)] ),
			bottomright: new Point( [(actorX + actorWidth), (actorY + actorHeight)] )
		}
	})();

	this.getAllBounds = function() {
		return bounds;
	};

	this.getBoundPoint = function(strDirection) {
		Assert.is(strDirection instanceof String, 'The Parameter must be of string type to find this BoundBox currently asked for bound!');
		return bounds[strDirection];
	};
}