/**
 * Created by dillo_000 on 1/26/2017.
 */
Polymorphism.inherits(Entity, Figure);
function Entity(_x, _y, _width, _height, _acceleration) {
    Figure.apply(this, arguments);

    // RenderController.addView(this);
    // //protected:
    // this.xy = new Vector( _x, _y);
    //
    // Object.defineProperty(this.xy, "x", {
    //     value: (xy) || "Meow",
    //     writable: false
    // });

}
