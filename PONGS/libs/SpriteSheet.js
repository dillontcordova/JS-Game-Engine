/**
 * Created by dillo_000 on 1/13/2017.
 */

function SpriteSheet (_fileName, _ctx, _spriteWidth, _spriteHeight) {
    Assert.is(_fileName && _ctx, 'Unable to load spriteSheet!');

    let animationClips = [];
    let curAnimationClip = 0;
    let curAnimationFrame = 0;
    let spriteWidth = _spriteWidth || 16;
    let spriteHeight = _spriteHeight || 16;
    let imageSheet = new Image();

    imageSheet.crossOrigin = 'anonymous';
    imageSheet.src = _fileName;
    imageSheet.onload = determineAnimationFrames;

    function determineAnimationFrames() {
        let foundPixel = false;
        let rows = imageSheet.height / spriteHeight;
        let columns = imageSheet.width / spriteWidth;

        _ctx.drawImage(imageSheet, 0, 0);

        for(let row = 0; row < rows; row++) {
            animationClips.push([]);
            for(let col = 0; col < columns; col++) {
                let spriteImgData = _ctx.getImageData( (col * spriteWidth), (row * spriteHeight), spriteWidth, spriteHeight ).data;
                for(let k = 0; k < spriteImgData.length; k += 4) {
                    let curPixel = spriteImgData[k+3];
                    if( curPixel > 0 ){
                        foundPixel = true;
                        break;
                    }
                }
                animationClips[row][col] = foundPixel;
                foundPixel = false;
            }
        }
    }

    this.setAnimationClip = function(_animationClip) {
        Assert.is(_animationClip-0 === _animationClip-0, 'animation clip param must be of Integer type!');
        curAnimationClip = _animationClip;
        curAnimationFrame = 0;
    };

    this.nextFrame = function() {
        if(curAnimationFrame < animationClips[curAnimationClip].length) {
            curAnimationFrame++;
        } else {
            curAnimationFrame = 0;
        }
    };

    this.getAnimationFrame = function() {
        let imageDrawingCoordinates = {
            x: (curAnimationFrame * spriteWidth),
            y: (curAnimationClip * spriteHeight),
            w: spriteWidth,
            h: spriteHeight
        };

        this.nextFrame();

        return imageDrawingCoordinates;
    }

}
