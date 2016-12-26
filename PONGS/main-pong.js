/**
 * Created by dillon_cordova on 12/3/2016.
 */
(function Main() {
	Assert.setDebugModeTo(true);
	Assert.setDevelopModeTo(true);

	const CALC_FPS = 300;
	const RENDER_FPS = 60;
	const oneSec = 1000;
	var frameRenderDuration = oneSec / RENDER_FPS;
	var frameCalcDuration = oneSec / CALC_FPS;

	Game.init();

	(function GameLoop() {
		ActorController.tick();
		setTimeout(GameLoop, frameCalcDuration);
	})();
	(function RenderLoop() {

		ActorController.render();
		setTimeout(RenderLoop, frameRenderDuration);
	})();
})();

