/**
 * Created by dillo_000 on 1/13/2017.
 */
function View(_model) {
    const TO_RADIANS = Math.PI/180;

    let curSpin = 0;
    let maxSpin = 0;
    let model = _model;
    let isSpinning = false;

    let spriteSheet = null;
    let curAnimationClip = 0;
    let curAnimationFrame = 0;
    let animationClips = null;
    let ctx = Canvas.context;
    let spriteHeight = null;
    let spriteWidth = null;
    let imageSheet = null;

    spriteSheet = SpriteSheetController.getSpriteSheet(model.constructor.name);
    animationClips = spriteSheet.getAnimationClips();
    spriteHeight = spriteSheet.getSpriteHeight();
    spriteWidth = spriteSheet.getSpriteWidth();
    imageSheet = spriteSheet.getImageSheet();
    curAnimationFrame = 0;
    curAnimationClip = 0;

    this.render = function() {
        this.draw( model.getX(), model.getY(), model.getWidth(), model.getHeight() );
    };

    this.draw = function (_x, _y, _width, _height) {
        if(!_width || !_height) {
            if(imageSheet) {
                _width = imageSheet.width;
                _height = imageSheet.height;
            }
        }

        if(!isSpinning) {
            this.drawCurrentFrame(_x, _y, _width, _height);
        } else {
            if(curSpin >= maxSpin) {
                this.rotate(_x, _y, ++curSpin);
            } else {
                curSpin = 0;
                maxSpin = 0;
                isSpinning = false;
            }
        }
    };

    this.rotate = function (_x, _y, _angle) {
        ctx.save(); //save context state

        ctx.translate(_x, _y); //move rotating origin point of context to x and y
        ctx.rotate(_angle * TO_RADIANS);
        ctx.drawImage( imageSheet, -(imageSheet.width/2), -(imageSheet.height/2) ); //draw from that origin point so that when it spins it spins from the center

        ctx.restore();
    };

    this.spin = function (_degreesToSpin) {
        isSpinning = true;
        maxSpin = _degreesToSpin;
    };

    this.setAnimationClip = function(_animationClipNum) {
        Assert.is(_animationClipNum-0 === _animationClipNum-0, 'animation clip param must be of Integer type!');
        Assert.is(_animationClipNum <= animationClips.length, 'animation clip param must not be greater than animation clip total array count!');
        curAnimationClip = _animationClipNum;
        curAnimationFrame = 0;
    };

    this.nextFrame = function() {
        ++curAnimationFrame;
        if(curAnimationFrame >= animationClips[curAnimationClip].length) {
            curAnimationFrame = 0;
        }
    };

    this.drawCurrentFrame = function(_x, _y, _width, _height) {
        ctx.drawImage  (imageSheet,
                            (curAnimationFrame * spriteWidth), (curAnimationClip * spriteHeight), spriteWidth, spriteHeight,
                            _x, _y, _width, _height);
        this.nextFrame();
    }
}
