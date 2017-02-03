/**
 * Created by dillo_000 on 1/26/2017.
 */
Polymorphism.inherits(Entity, Figure);
function Entity(_x, _y, _width, _height, _acceleration) {
    Entity.super(this, arguments);

    let width = _width;
    let height = _height;
    let collisionObj = new Collision(this.getVector(), width, height);
    EntityController.addEntity(this);

    //Public Methods:
    this.tick = function(_actors) {
        collisionObj.checkCollision(this, _actors);
    };

    //Privileged Methods:
    this.getWidth = function () {
        return width;
    };
    this.getHeight = function () {
        return height;
    };
    this.getCollisionObj = function () {
        return collisionObj;
    };
}