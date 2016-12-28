/**
 * Created by dillon_cordova on 12/3/2016.
 */
var Game = (function() {
	//private:
	var room;
	var width;
	var canvas;
	var height;
	var ctx;
	var keyInput;
	var gameScore;
	var player1Num;
	var player2Num;
	var sideScoreAnimation = 0;

	return {
		//privileged:
		init: function() {
			canvas = document.getElementById("game");
			gameScore = document.getElementById("game-score");
			ctx = canvas.getContext("2d");
			height = canvas.height;
			width = canvas.width;
			
			keyInput = KeyInput.getInstance();
			room = new Room(10, 0, width-10, height);
			player1Num = 0;
			player2Num = 0;

			//temp
			(function ActorInit() {
				ActorController.init(ctx, height, width, keyInput);
				new Wall(0, 30, width, 5, 0)					; // top
				new Wall(0, height-35, width, 5, 0)				; // bottom
				new LeftPaddle(0, height/2, 15, 45, 1)			;
				new RightPaddle(width-20, height/2, 15, 45, 1)	;
				new Ball(width/2, ((height/2) + 10), 10, 10, 1)	;
				ActorController.render();
			})();
		},

		resetLevel: function() {
			if(player1Num > 4 || player2Num > 4) {
				//game over
			}

			//temp
			(function ActorInit() {
				ActorController.init(ctx, height, width, keyInput);

				new Wall(0, 30, width, 5, 0)					; // top
				new Wall(0, height-35, width, 5, 0)				; // bottom
				new LeftPaddle(0, height/2, 15, 45, 1)			;
				new RightPaddle(width-20, height/2, 15, 45, 1)	;
				new Ball(width/2, ((height/2) + 10), 10, 10, 1)	;

			})();
		},

		getCanvasWidth: function() {
			return width;
		},
		getCanvasHeight: function() {
			return height;
		},
		getCanvasCtx: function() {
			return ctx;
		},
		getKeyInput: function () {
			return keyInput;
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