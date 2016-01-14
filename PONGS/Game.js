function Game() {
//private:
	var canvas = document.getElementById("game");
	var width = canvas.width;
	var height = canvas.height;
	var context = canvas.getContext("2d");    		
//privledged:
	this.getCanvasWidth = function() {
		return width;
	};
	this.getCanvasHeight = function() {
		return height;
	};
	this.getCanvasCtx = function() {
		return context;
	};
}