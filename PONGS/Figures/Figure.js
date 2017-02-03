/**
 * Created by dillo_000 on 1/27/2017.
 */
function Figure(_x, _y, _width, _height, _acceleration) {
    let xy = new Vector( _x, _y);
    RenderController.addView(this);

    //Privileged Methods:
    this.getVector = function () {
        return xy;
    };
    this.getX = function () {
        return xy.getX();
    };
    this.getY = function () {
        return xy.getY();
    };

    this.setX = function (__x) {
        xy.setX(__x);
    };
    this.setY = function (__y) {
        xy.setY(__y);
    };
}