/**
 * Created by dillon_cordova on 12/3/2016.
 */
(function Main() {
	Assert.setDebugModeTo(true);
	Assert.setDevelopModeTo(true);

	var game			= new Game();
	var input			= new KeyInput();
	var canvasWidth		= game.getCanvasWidth();
	var canvasHeight	= game.getCanvasHeight();

    (function() {
		ActorController.init(game.getCanvasCtx(), canvasHeight, canvasWidth, input);
        // new Wall(0, 0, canvasWidth, 5, 0)		   ;
        // new Wall(0, 0, 5, canvasHeight, 0)	       ;
        // new Wall(0, canvasHeight, canvasWidth, 5, 0);
        // new Wall(canvasWidth, 0, 5, canvasHeight, 0);
		new LeftPaddle(0, canvasHeight/2, 15, 45, 5);
		new Ball(canvasWidth/2, ((canvasHeight/2) + 10), 10, 10, 2);
		new RightPaddle(canvasWidth-20, canvasHeight/2, 15, 45, 5);
    })();

	(function GameLoop() {
		ActorController.tick();
		setTimeout(GameLoop, 16.6666);
	})();
	(function RenderLoop() {
		ActorController.render();
		setTimeout(RenderLoop, 16.6666);
	})();
})();

