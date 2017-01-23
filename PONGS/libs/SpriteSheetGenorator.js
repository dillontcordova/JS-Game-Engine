/**
 * Created by dillo_000 on 1/20/2017.
 */

let SpriteSheetGenerator = (function () {
    const SheetValue = [
        'spriteSize',
        'filePath',
        'width',
        'height',
        'spriteSheetName'
    ];

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
        let spriteSheet = new SpriteSheet();

        for(let sheetValue of SheetValue) {
            let curSheetPropertyValue = _spriteSheetData[sheetValue];

            switch (sheetValue) {
                // 'filePath',
                // 'width',
                // 'height',
                case 'filePath':
                    spriteSheet.setImage(curSheetPropertyValue);
                    break;
                case 'spriteSize':
                    spriteSheet.setSpriteWidth(curSheetPropertyValue);
                    spriteSheet.setSpriteHeight(curSheetPropertyValue);
                    break;
                case 'spriteSheetName':
                    spriteSheet.setSpriteSheetName(curSheetPropertyValue);
                    break;
            }
        }

        return spriteSheet;
    };

    return {
        curCount: 0,
        totalCount: 0,
        resolvefuncPointer: null,
        rejectfuncPointer: null,

        spriteSheetCreator: function (_url, _promiseResolve, _promiseReject) {
            this.resolvefuncPointer = _promiseResolve;
            this.rejectfuncPointer = _promiseReject;
            readSpriteSheetFile(_url).then( function(result) {
                this.totalCount = result.length;
                for(let spriteSheet of result) {
                    SpriteSheetController.addSpriteSheet( pretendFutureConstructor(spriteSheet) );
                }
            });
        },


    }
})();