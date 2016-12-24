/**
 * Created by dillo_000 on 12/23/2016.
 */
Polymorphism.inherits(Friendly, Actor);
function Friendly(_x, _y, _width, _height, _acceleration) {
    Actor.call(this, _x, _y, _width, _height, _acceleration);
    ActorController.addFriendly(this);
}