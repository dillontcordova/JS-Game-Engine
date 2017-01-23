/**
 * Created by dillo_000 on 1/20/2017.
 */
let ReadSpriteFiles = (function () {
    return {
        readSpriteSheetFile: function (_url) {
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
        }
    };
})();