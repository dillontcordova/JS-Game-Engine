/**
 * Created by dillon_cordova on 12/3/2016.
 */
(function Main(global) {
	Assert.setDebugModeTo(true);
	Assert.setDevelopModeTo(true);

	const oneSec = 1000;
	const CALC_FPS = 300;
	const RENDER_FPS = 60;
	let frameCalcDuration = oneSec / CALC_FPS;
    let frameRenderDuration = oneSec / RENDER_FPS;

    let requestFrameToRenderOn = (function(){
        return  window.requestAnimationFrame       ||
            	window.webkitRequestAnimationFrame ||
            	window.mozRequestAnimationFrame    ||
            function( callback ){
                setTimeout(callback, frameRenderDuration);
            };
    })();

    GameManager.init();

    global.start = function(){
    	if( !EntityController.isInitialized() ){
            SpriteSheetGenerator.imageLoadingFailed();
            Assert.is(false, '!GameManager initialization has failed!')
		}

		let gameStartScreen = document.getElementById("game-start-screen");
		gameStartScreen.setAttribute('class', 'hidden');

		(function CalcLoop() {
			EntityController.tick();
			setTimeout(CalcLoop, frameCalcDuration);
		})();
		(function RenderLoop() {
			RenderController.render();
            requestFrameToRenderOn(RenderLoop);
		})();
	};

})(this);

