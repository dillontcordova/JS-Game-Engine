/**
 * Created by dillo_000 on 1/20/2017.
 */
let AudioController = (function () {

    let audioSheetList = {};

    return {
        addAudio: function (_fileName, _filePath) {
            if(!audioSheetList[_fileName]) {
                audioSheetList[_fileName] = new Audio(_filePath);
            }
        },

        getAudio: function (_fileName) {
            Assert.is(_fileName, '!Can not Obtain audio because file name param in blank!');
            Assert.is(audioSheetList[_fileName], '!Can not Obtain audio because it was not added with this name: (' + _fileName + ')!');

            return audioSheetList[_fileName];
        }
    }
})();
