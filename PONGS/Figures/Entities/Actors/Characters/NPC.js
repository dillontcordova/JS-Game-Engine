/**
 * Created by dillo_000 on 2/3/2017.
 */
// Polymorphism.inherits(Player, Entity);
function NPC(_name, _x, _y, _width, _height, _speed) {
    let name = _name;
    let curNpcSoundList = [];

    this.addAudio = function(_fileName, _filePath) {
        AudioController.addAudio(_fileName, _filePath);
        if(!curNpcSoundList[_fileName]) {
            curNpcSoundList.push(_fileName);
        }
    }

}