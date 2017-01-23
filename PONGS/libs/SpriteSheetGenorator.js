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

    let readSpriteSheetFile = function (_url) {
        return new Promise(function (resolve, reject) {
            let rawFile = new XMLHttpRequest();
            rawFile.overrideMimeType("application/json");
            rawFile.open("GET", _url, true);
            rawFile.onreadystatechange = function () {
                if (rawFile.readyState === 4 && rawFile.status == "200") {
                    resolve(JSON.parse(rawFile.responseText));
                }
            };
            rawFile.send(null);
        });
    };

    let pretendFutureConstructor = function (_spriteSheetData) {
        debugger;
        let spriteSheet = new SpriteSheet();

        for(let sheetValue of Object.values(SheetValue)) {
            switch (sheetValue) {
                case SheetValue.SheetPath:
                    spriteSheet.setImagePath(_spriteSheetData[sheetValue]);
                    break;
                case SheetValue.SheetHeight:
                    spriteSheet.setImageHeight(_spriteSheetData[sheetValue]);
                    break;
                case SheetValue.SheetWidth:
                    spriteSheet.setImageWidth(_spriteSheetData[sheetValue]);
                    break;
                case SheetValue.SpriteSize:
                    spriteSheet.setSpriteSize(_spriteSheetData[sheetValue]);
                    break;
            }
        }
    };

    return {
        spriteSheetCreator: function (_url) {
            readSpriteSheetFile(_url).then( function(result) {
                for(let spriteSheet of result) {
                    SpriteSheetController.addSpriteSheet( pretendFutureConstructor(spriteSheet) );
                }
            });
        },


    }
})();