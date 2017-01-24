/**
 * Created by dillo_000 on 1/12/2017.
 */
let RenderController = (function () {

    return {
        ctx: null,
        viewList: [],
        canvasWidth: null,
        canvasHeight: null,

        init: function (_ctx, _canvasHeight, _canvasWidth) {
            this.viewList = [];

            this.ctx =_ctx;
            this.canvasWidth = _canvasWidth;
            this.canvasHeight = _canvasHeight;

            View.prototype.ctx = View.prototype.ctx || _ctx;
            View.prototype.canvasWidth = View.prototype.canvasWidth || _canvasWidth;
            View.prototype.canvasHeight = View.prototype.canvasHeight || _canvasHeight;
        },

        addView: function (_actor) {
            Assert.is( _actor instanceof Actor, "Can only add of class Actor to the addView method in RenderController!" );
            // eval('new ' + _actor.constructor.name + 'View(' + _actor + ')');
            this.viewList.push( new View(_actor) );
        },

        render: function() {
            this.ctx.clearRect( 0, 0, this.canvasWidth, this.canvasHeight );
            for (let i = this.viewList.length - 1; i >= 0; i--) {
                this.viewList[i].render();
            }
        }
    };
})();