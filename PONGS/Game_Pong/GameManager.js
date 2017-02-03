/**
 * Created by dillon_cordova on 12/3/2016.
 */
let GameManager = (function() {
    //private:
    let ctx;
	let room;
    let width;
    let height;
	let gameScore;
	let player1Num;
	let player2Num;

	return {
		//privileged:
		init: function() {
            ctx = Canvas.context;
            width = Canvas.width;
            height = Canvas.height;
            gameScore = document.getElementById("game-score");

			player1Num = 0;
            player2Num = 0;
            room = new Room(10, 0, (width-10), height);

			//temp
			(function GameInit() {

                let loadImages = new Promise(function (resolve, reject) { 
                    SpriteSheetController.init();
                    SpriteSheetGenerator.spriteSheetCreator('res\\SPRITE_SHEETS\\spriteSheetInfo.txt', resolve, reject);
                });

                loadImages.then(
					function initialize() {
						EntityController.init();
						RenderController.init();

						new Wall(0, 30, width, 5, 0)					; // top
						new Wall(0, height-35, width, 5, 0)				; // bottom
						new LeftPaddle(0, height/2, 15, 45, 1)			;
						new RightPaddle(width-20, height/2, 15, 45, 1)	;
						new Ball(width/2, ((height/2) + 10), 10, 10, 1)	;
						RenderController.render();
					}
				)
				.catch(
					function initFailed(reason) {
						Assert.console('GameManager was not properly initialized');
						Assert.console('count of images loaded: (' + SpriteSheetGenerator.curCount + ') Amount of images need to load: (' + SpriteSheetGenerator.totalCount + ')');
						Assert.is(false, reason);
					}
				);
			})();
		},

		resetLevel: function() {
			if(player1Num > 4 || player2Num > 4) {
				//game over
			}

			//temp
			(function ActorInit() {
				EntityController.init();
                RenderController.init();

				new Wall(0, 30, width, 5, 0)					; // top
				new Wall(0, height-35, width, 5, 0)				; // bottom
				new LeftPaddle(0, height/2, 15, 45, 1)			;
				new RightPaddle(width-20, height/2, 15, 45, 1)	;
				new Ball(width/2, ((height/2) + 10), 10, 10, 1)	;
			})();
		},

		getRoom: function() {
			return room;
		},
		incrementPlayer0GameScore: function() {
			player1Num++;
			this.updateScoreText(0);
		},
		incrementPlayer1GameScore: function() {
			player2Num++;
			this.updateScoreText(1);
		},
		updateScoreText: function (_sideScoreAnimation) {
			gameScore.setAttribute('activate-effect', _sideScoreAnimation);
			setTimeout(function () {
				gameScore.removeAttribute('activate-effect');
			}, 1000);
			gameScore.innerText = player1Num + ' | ' + player2Num;
		}
	}
})();