/**
 * Created by dillo_000 on 1/13/2017.
 */

function SpriteSheet () {
    let sheetName = '';
    let spriteWidth = 16;
    let spriteHeight = 16;
    let imageSheet = null;
    let animationClips = [];

    this.determineAnimationClips = function() {
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

        if(++SpriteSheetGenerator.curCount === SpriteSheetGenerator.totalCount) {
            SpriteSheetGenerator.imageLoadingCompleted();
        }
    };

    this.setImage = function(_fileName) {
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
    this.getSpriteWidth = function() {
        return spriteWidth;
    };
    this.getSpriteHeight = function() {
        return spriteHeight;
    };
    this.getImageSheet = function() {
        return imageSheet;
    };
    this.getAnimationClips = function() {
        return animationClips;
    };
}