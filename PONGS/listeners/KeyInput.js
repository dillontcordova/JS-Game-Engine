/**
 * Created by dillon_cordova on 12/4/2016.
 */
//Private static instance letiable due to the closure made by "getInstance()".
let instance = null;

let KeyInput = function() {
	Polymorphism.singletonClass(instance);

	instance = this;
    let pressedKeys = [];
    let releasedKeys = [];
	let KeyEnums = {
		LEFT_ARROW: 37,
		UP_ARROW: 38,
		RIGHT_ARROW: 39,
		DOWN_ARROW: 40
	};

	this.keyDown = function(e) {
		pressedKeys[e.keyCode] = true;
	};

	this.keyUp = function(e) {
        pressedKeys[e.keyCode] = false;
        releasedKeys[e.keyCode] = true;
	};

    this.getKey = function (_key){
        if( (_key - 0) === (_key - 0) ) {
            return _key;
        } else {
            return KeyEnums[ _key.toUpperCase() ]
        }
    };

    this.isReleased = function(_key) {
        let currentKeyReleased = this.getKey(_key);
        return [currentKeyReleased] ? true : false;
    };

    this.isPressed = function(_key) {
        let currentKeyPressed = this.getKey(_key);
		return pressedKeys[currentKeyPressed] ? true : false;
	};

	this.getKeyEnums = function () {
		return KeyEnums;
	};
	//Not sure what this is for (maybe its an overide to the documents prebuilt "keypress" default function)
	// this.addKeyPressListener = function(_keyCode, _callback) {
	// 	document.addEventListener("keypress", function(e) {
	// 		if (e.keyCode == keyCode)
	// 			callback(e);
	// 	});
	// };

	document.addEventListener("keydown", this.keyDown.bind(this));
	document.addEventListener("keyup", this.keyUp.bind(this));
};

//Held outside the Function-Class to make it a public static method which then utilizes the closure of the "instance" let; to make it a private static let.
KeyInput.getInstance = function() {
	if(!instance) {
		return new KeyInput();
	}
	return instance;
};