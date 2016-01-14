(function Main() {
	Assert.setDebugModeTo(true);
	Assert.setDevelopModeTo(true);

    var game = new Game();    
	var canvasHeight = game.getCanvasHeight();
	var canvasWidth = game.getCanvasWidth();

	var actors = [];
    actors.push( new LeftPaddle(0, canvasHeight/2, 15, 45, 5) );
    actors.push( new RightPaddle(canvasWidth-20, canvasHeight/2, 15, 45, 5) );
    actors.push( new Ball(canvasWidth/2, canvasHeight/2, 10, 10, 5) );

	var input = new KeyInput();
	var controller = new ActorController(game.getCanvasCtx(), canvasHeight, canvasWidth, input);
	controller.addActors(actors);

	(function GameLoop() {
		controller.tick();
		controller.render();
		setTimeout(GameLoop, 33.3333);
	})();
})();