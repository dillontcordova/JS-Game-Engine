/**
 * Created by dillon_cordova on 12/3/2016.
 */
let Game = (function() {
    //private:
    let ctx;
	let room;
    let width;
    let canvas;
    let height;
	let keyInput;
	let gameScore;
	let player1Num;
	let player2Num;

	return {
		//privileged:
		init: function() {
			gameScore = document.getElementById("game-score");
            canvas = document.getElementById("game");
            ctx = canvas.getContext("2d");
			height = canvas.height;
			width = canvas.width;
			
			keyInput = KeyInput.getInstance();
			room = new Room(10, 0, width-10, height);
			player1Num = 0;
			player2Num = 0;

			//temp
			(function GameInit() {

                let readSpriteFiles = new ReadSpriteFiles("D:\\Repositories\\Java-Game-Engine\\res\\SpriteSheets\\spriteSheetInfo.txt");
                SpriteSheetGenerator.spriteSheetCreator(readSpriteFiles.openFile());


				ActorController.init(keyInput);
                RenderController.init(ctx, height, width);
                SpriteSheetController.init(ctx);

				new Wall(0, 30, width, 5, 0)					; // top
				new Wall(0, height-35, width, 5, 0)				; // bottom
				new LeftPaddle(0, height/2, 15, 45, 1)			;
				new RightPaddle(width-20, height/2, 15, 45, 1)	;
				new Ball(width/2, ((height/2) + 10), 10, 10, 1)	;
				RenderController.render();
			})();
		},

		resetLevel: function() {
			if(player1Num > 4 || player2Num > 4) {
				//game over
			}

			//temp
			(function ActorInit() {
				ActorController.init(keyInput);
                RenderController.init(ctx, height, width);

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