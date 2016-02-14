/**
 * Created by dillo_000 on 2/13/2016.
 */
Polymorphism.inherits(Room, Actor);
function Room(_x, _y, _width, _height, _acceleration) {
    Actor.call(this, _x, _y, _width, _height, _acceleration);
    var curBoundBox = this.getCollision();

    this.getFillStyle = function() {
        return "";
    };
    this.tickActor = function(_otherCollision) {
        this.physics();
        curBoundBox.checkCollision ( _otherCollision );
    };
    this.drawActor = function(_ctx) {
        _ctx.rect(this.getX(), this.getY(), this.getWidth(), this.getHeight());
        _ctx.stroke();
    };

    this.physics = function() {
        //if( curBoundBox.isColliding() ){
        //    if( curBoundBox.isCollidingLeft() || curBoundBox.isCollidingRight() ){
        //        this.setVelX(-this.getVelX());
        //    }
        //    if( curBoundBox.isCollidingTop() ){
        //        this.setVelY(-this.getVelY());
        //    }
        //    if( curBoundBox.isCollidingBottom() ){
        //        this.setVelY(-this.getVelY());
        //    }
        //}
        //
        //this.setX(this.getX() + this.getVelX());
    };
}