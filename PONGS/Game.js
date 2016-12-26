/**
 * Created by dillon_cordova on 12/3/2016.
 */
var Game = (function() {
	//private:
	var room;
	var width;
	var canvas;
	var height;
	var context;
	var keyInput;

	return {
		//privileged:
		init: function() {
			canvas = document.getElementById("game");
			context = canvas.getContext("2d");
			height = canvas.height;
			width = canvas.width;
			keyInput = KeyInput.getInstance();
			room = new Room(0, 0, width, height);
			
			//temp
			(function ActorInit() {
				ActorController.init(context, height, width, keyInput);

				new Wall(0, 0, width, 5, 0)						;
				new Wall(0, height-5, width, 5, 0)				;
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
			return context;
		},
		getKeyInput: function () {
			return keyInput;
		},
		getRoom: function() {
			return room;
		}
	}
})();