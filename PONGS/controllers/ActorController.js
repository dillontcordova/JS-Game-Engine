/**
 * Created by dillon_cordova on 1/4/2016.
 */
function ActorController(_ctx, _canvasHeight, _canvasWidth, _input) {
	var ctx = _ctx;
	var actors = [];
	// var room = _room;
	var input = _input;
	var canvasWidth = _canvasWidth;
	var canvasHeight = _canvasHeight;

	this.addActors = function(__actors) {
		for (var i = __actors.length - 1; i >= 0; i--) {
			Assert.is( __actors[i] instanceof Actor, "Can only add actors to this controller!" );
			actors.push(__actors[i]);
		}
	};

	this.tick = function() {
		for (var i = actors.length - 1; i >= 0; --i) {
            actors[i].tick(actors, input);
        }
	};

	// this.addViews = function(__actors) {
	// 	for (var i = __actors.length - 1; i >= 0; i--) {
	// 		Assert.is( __actors[i] instanceof View, "Can only apply actors to this controller!" );
	// 		actors.push(__actors[i]);
	// 	}
	// };

	this.render = function() {
		ctx.clearRect( 0, 0, canvasWidth, canvasHeight );
		for (var i = actors.length - 1; i >= 0; i--) {
			actors[i].draw(ctx, canvasHeight, canvasWidth);
		}
	};
}