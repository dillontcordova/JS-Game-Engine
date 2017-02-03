/**
 * Created by dillo_000 on 2/2/2017.
 */
let Canvas = (function (_id) {
    let canvas;
    if(_id) {
        canvas = document.getElementById(_id);
    } else {
        canvas = document.getElementsByTagName('canvas')[0];
    }
    Assert.is(canvas, '!Your html file does not include a canvas!');

    return {
        canvas: canvas,
        width: canvas.width,
        height: canvas.height,
        context: canvas.getContext("2d")
    }
})();
