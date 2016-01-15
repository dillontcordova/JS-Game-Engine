/**
 * Created by dillon_cordova on 1/4/2016.
 */
//Private static instance variable due to the closure made by "getInstance()".
var instance = null;

var KeyInput = function() {
	Polymorphism.singletonClass(instance);

	instance = this;
	var pressedKeys = [];
	var KeyEnums = {
		LEFT_ARROW: 37,
		UP_ARROW: 38,
		RIGHT_ARROW: 39,
		DOWN_ARROW: 40
	};

	this.keyDown = function(e) {
		pressedKeys[e.keyCode] = true;
		console.log(e.keyCode);
	};

	this.keyUp = function(e) {
		pressedKeys[e.keyCode] = false;
	};

	this.isPressed = function(_key) {
		var currentKeyPressed;
		if( (_key - 0) === (_key - 0) ) {
			currentKeyPressed = _key;
		} else {
			currentKeyPressed = KeyEnums[ _key.toUpperCase() ]
		}
		return pressedKeys[currentKeyPressed] ? true : false;
	};

	//Not sure what this is for (maybe its an overide to the documents prebuilt "keypress" default function)
	this.addKeyPressListener = function(_keyCode, _callback) {
		document.addEventListener("keypress", function(e) {
			if (e.keyCode == keyCode)
				callback(e);
		});
	};

	document.addEventListener("keydown", this.keyDown.bind(this));
	document.addEventListener("keyup", this.keyUp.bind(this));
};

//Held outside the Function-Class to make it a public static method which then utilizes the closure of the "instance" var; to make it a private static var.
KeyInput.getInstance = function() {
	return instance;
};