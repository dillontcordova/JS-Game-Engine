/**
 * Created by dillon_cordova on 12/3/2016.
 */
(function Main(global) {
	Assert.setDebugModeTo(true);
	Assert.setDevelopModeTo(true);

	const oneSec = 1000;
	const CALC_FPS = 300;
	const RENDER_FPS = 60;
	var frameRenderDuration = oneSec / RENDER_FPS;
	var frameCalcDuration = oneSec / CALC_FPS;

	Game.init();

	global.start = function(){
		var asd = document.getElementById("game-start-screen");
			asd.setAttribute('class', 'hidden');

		(function CalcLoop() {
			ActorController.tick();
			setTimeout(CalcLoop, frameCalcDuration);
		})();
		(function RenderLoop() {
			ActorController.render();
			setTimeout(RenderLoop, frameRenderDuration);
		})();
	};

})(this);

