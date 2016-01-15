/**
 * Created by dillon_cordova on 1/3/2016.
 */
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