/**
 * Created by dillon_cordova on 12/3/2016.
 */
function Game() {
//private:
	var canvas = document.getElementById("game");
	var context = canvas.getContext("2d");
	var height = canvas.height;
	var width = canvas.width;
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