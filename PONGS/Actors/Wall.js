/**
 * Created by dillo_000 on 12/16/2016.
 */
Polymorphism.inherits(Wall, Actor);
function Wall(_x, _y, _width, _height, _speed) {
    Actor.call(this, _x, _y, _width, _height, _speed);

    this.subTick = function() {
    };

    this.physics = function() {
    };

    this.collidedWithObject = function(_otherCollision) {
    };
    this.getFillStyle = function() {
        return "yellow";
    };
    this.drawActor = function(_ctx) {
        _ctx.fillRect( this.getX(), this.getY(), this.getWidth(), this.getHeight() );
    };
}