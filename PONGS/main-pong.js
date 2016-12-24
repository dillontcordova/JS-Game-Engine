/**
 * Created by dillon_cordova on 12/3/2016.
 */
(function Main() {
	Assert.setDebugModeTo(true);
	Assert.setDevelopModeTo(true);

	Game.init();
	// var input			= Game.getKeyInput();
	// var ctx				= Game.getCanvasCtx();
	// var canvasWidth		= Game.getCanvasWidth();
	// var canvasHeight	= Game.getCanvasHeight();
    //
    // (function ActorInit() {
	// 	ActorController.init(ctx, canvasHeight, canvasWidth, input);
    //
	// 	new Wall(0, 0, canvasWidth, 5, 0)				;
     //    new Wall(0, canvasHeight-5, canvasWidth, 5, 0)	;
    //
	// 	new LeftPaddle(0, canvasHeight/2, 15, 45, 3)				;
	// 	new RightPaddle(canvasWidth-20, canvasHeight/2, 15, 45, 3)	;
	// 	new Ball(canvasWidth/2, ((canvasHeight/2) + 10), 10, 10, 2)	;
    //
	// })();

	(function GameLoop() {
		ActorController.tick();
		setTimeout(GameLoop, 16.6666);
	})();
	(function RenderLoop() {
		ActorController.render();
		setTimeout(RenderLoop, 16.6666);
	})();
})();

