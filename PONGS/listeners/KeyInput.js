/**
 * Created by dillon_cordova on 12/4/2016.
 */
//Private static instance variable due to the closure made by "getInstance()".
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
		DOWN_ARROW: 40,
		SPACE_BAR: 32,
        PLUS_SIGN: 107,
		W: 87,
		A: 65,
		S: 83,
		D: 68,
		F: 70
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
        return [currentKeyReleased];
    };

    this.isPressed = function(_key) {
        let currentKeyPressed = this.getKey(_key);
		return pressedKeys[currentKeyPressed];
	};

	this.getKeyEnums = function () {
		return KeyEnums;
	};

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