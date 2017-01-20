/**
 * Created by dillon_cordova on 12/3/2016.
 */
(function Main(global) {
	Assert.setDebugModeTo(true);
	Assert.setDevelopModeTo(true);

	const oneSec = 1000;
	const CALC_FPS = 300;
	const RENDER_FPS = 60;
	let frameRenderDuration = oneSec / RENDER_FPS;
	let frameCalcDuration = oneSec / CALC_FPS;

    Game.init();

    let requestFrameToRenderOn = (function(){
        return  window.requestAnimationFrame       ||
            	window.webkitRequestAnimationFrame ||
            	window.mozRequestAnimationFrame    ||
            function( callback ){
                setTimeout(callback, frameRenderDuration);
            };
    })();

	global.start = function(){
		let gameStartScreen = document.getElementById("game-start-screen");
		gameStartScreen.setAttribute('class', 'hidden');

		(function CalcLoop() {
			ActorController.tick();
			setTimeout(CalcLoop, frameCalcDuration);
		})();
		(function RenderLoop() {
			RenderController.render();
            requestFrameToRenderOn(RenderLoop);
		})();
	};
})(this);

