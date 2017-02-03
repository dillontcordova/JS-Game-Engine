/**
 * Created by dillo_000 on 1/20/2017.
 */

let SpriteSheetController = (function () {
    let ctx = null;
    let spriteSheetList = null;

    return {
        init: function() {
            ctx = Canvas.context;
            spriteSheetList = {};
        },

        addSpriteSheet: function (_spriteSheet) {
            Assert.is(ctx, '!init function on SpriteSheetController was never called!');
            let sheetName = _spriteSheet.getSpriteSheetName();
            if( !spriteSheetList[sheetName] ){
                spriteSheetList[sheetName] = _spriteSheet;
            }
        },

        getSpriteSheet: function (_fileName) {
            Assert.is(ctx, '!init function on SpriteSheetController was never called!');
            Assert.is(_fileName, '!Can not Obtain sprite sheet because file name param in blank!');
            _fileName = _fileName.toLowerCase();
            Assert.is(spriteSheetList[_fileName], '!Can not Obtain sprite sheet because it was not added with this name: (' + _fileName + ')!');

            return spriteSheetList[_fileName];
        }
    }
})();