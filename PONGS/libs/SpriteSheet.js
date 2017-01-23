/**
 * Created by dillo_000 on 1/13/2017.
 */

function SpriteSheet () {
    // Assert.is(_fileName && _ctx, 'Unable to load spriteSheet!');

    let sheetName = '';
    let spriteWidth = 16;
    let spriteHeight = 16;
    let imageSheet = null;
    let animationClips = [];
    let curSplicedSheets = 0;
    let curAnimationClip = 0;
    let curAnimationFrame = 0;
    let totalSheetsToSplice = RenderController.viewList.length;


    this.determineAnimationClips = function() {
        SpriteSheetGenerator.curCount++;
        debugger;
        if(SpriteSheetGenerator.curCount === SpriteSheetGenerator.totalCount) {
            SpriteSheetGenerator.resolvefuncPointer();
        }
        let foundPixel = false;
        let rows = imageSheet.height / spriteHeight;
        let columns = imageSheet.width / spriteWidth;

        this.ctx.drawImage(imageSheet, 0, 0);

        for(let row = 0; row < rows; row++) {
            animationClips.push([]);
            for(let col = 0; col < columns; col++) {
                let spriteImgData = this.ctx.getImageData( (col * spriteWidth), (row * spriteHeight), spriteWidth, spriteHeight ).data;
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
    };

    this.setImage = function(_fileName, _promiseResolve) {
        imageSheet = new Image();
        imageSheet.crossOrigin = 'anonymous';
        imageSheet.src = _fileName;
        imageSheet.onload = this.determineAnimationClips.bind(this);
    };
    this.setSpriteWidth = function(_width) {
        spriteWidth = _width;
    };
    this.setSpriteHeight = function(_height) {
        spriteHeight = _height;
    };
    this.setSpriteSheetName = function(_name) {
        sheetName = _name;
    };

    this.getSpriteSheetName = function() {
        return sheetName;
    };


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
