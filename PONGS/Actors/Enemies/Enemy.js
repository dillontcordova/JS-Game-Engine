/**
 * Created by dillo_000 on 12/23/2016.
 */
Polymorphism.inherits(Enemy, Actor);
function Enemy(_x, _y, _width, _height, _acceleration) {
    Actor.call(this, _x, _y, _width, _height, _acceleration);
    ActorController.addEnemy(this);
}