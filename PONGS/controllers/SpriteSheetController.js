/**
 * Created by dillo_000 on 1/20/2017.
 */

let SpriteSheetController = (function () {

    let ctx = null;
    let spriteSheetList = null;

    return {
        init: function(_ctx) {
            ctx = _ctx;
            spriteSheetList = {};
        },

        addSpriteSheet: function (_fileName, _filePath, _spriteWidth, _spriteHeight) {
            debugger;
            Assert.is(ctx, '!init function on SpriteSheetController was never called!');
            if(!spriteSheetList[_fileName]) {
                spriteSheetList[_fileName] = new SpriteSheet(_filePath, ctx, _spriteWidth, _spriteHeight);
            }
        },

        getSpriteSheet: function (_fileName) {
            Assert.is(ctx, '!init function on SpriteSheetController was never called!');
            Assert.is(_fileName, '!Can not Obtain sprite sheet because file name param in blank!');
            Assert.is(spriteSheetList[_fileName], '!Can not Obtain sprite sheet because it was not added with this name: (' + _fileName + ')!');

            return spriteSheetList[_fileName];
        }
    }
})();