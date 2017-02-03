/**
 * Created by dillo_000 on 12/16/2016.
 */
Polymorphism.inherits(Wall, Entity);
function Wall(_x, _y, _width, _height, _speed) {
    Wall.super(this, arguments);

    this.physics = function() {
    };

    this.collidedWithObject = function(_otherCollision) {
    };
}