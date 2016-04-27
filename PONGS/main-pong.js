/**
 * Created by dillon_cordova on 1/3/2016.
 */
(function Main() {
	Assert.setDebugModeTo(true);
	Assert.setDevelopModeTo(true);

	var actors			= [];
	var controller		= null;
	var game			= new Game();
	var input			= new KeyInput();
	var room			= new Room(1024, 32);
	var canvasWidth		= game.getCanvasWidth();
	var canvasHeight	= game.getCanvasHeight();

	actors.push(	new LeftPaddle(0, canvasHeight/2, 15, 45, 5)				);
	actors.push(	new Camera(0, 0, canvasWidth, canvasHeight, 0)				);
	actors.push(	new Ball(canvasWidth/2, canvasHeight/2+10, 10, 10, 5)		);
	actors.push(	new RightPaddle(canvasWidth-20, canvasHeight/2, 15, 45, 5)	);

	/////////////////////////////////////
	// room.setSector(actors[0]);
	// var proximityGrid = room.getGridAroundSector(actors[2].getSectorPosition());
	/////////////////////////////////////

	controller = new ActorController(game.getCanvasCtx(), canvasHeight, canvasWidth, input, room);
	controller.addActors(actors);

	(function GameLoop() {
		controller.tick();
		setTimeout(GameLoop, 16.6666);
	})();
	(function RenderLoop() {
		controller.render();
		setTimeout(RenderLoop, 33.3333);
	})();
})();