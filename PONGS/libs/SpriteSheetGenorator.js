/**
 * Created by dillo_000 on 1/20/2017.
 */

let SpriteSheetGenerator = (function () {
    const SheetValue = {
        SheetKey: 'sheetKey',
        SheetPath: 'sheetPath',
        SpriteSize: 'spriteSize',
        SheetWidth: 'sheetWidth',
        SheetHeight: 'sheetHeight'
    };

    return {
        spriteSheetCreator: function (_sprites) {
            let allSpriteSheets = {};
            for(let spriteSheetName of Object.keys(_sprites)) {
                allSpriteSheets[spriteSheetName] = this.pretendFutureConstructor(_sprites[spriteSheetName], spriteSheetName);
                SpriteSheetController.addSpriteSheet();
            }
        },

        pretendFutureConstructor: function (_spriteSheetData, _key) {

            let spriteSheet = new SpriteSheet();

            for(let sheetValue of Object.values(SheetValue)) {
                switch (sheetValue) {
                    case SheetValue.SheetPath:
                        spriteSheet.setImagePath(spriteSheetData[sheetValue]);
                        break;
                    case SheetValue.SheetHeight:
                        spriteSheet.setImageHeight(spriteSheetData[sheetValue]);
                        break;
                    case SheetValue.SheetWidth:
                        spriteSheet.setImageWidth(spriteSheetData[sheetValue]);
                        break;
                    case SheetValue.SpriteSize:
                        spriteSheet.setSpriteSize(spriteSheetData[sheetValue]);
                        break;
                }
            }
        }
    }
})();