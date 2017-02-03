/**
 * Created by dillo_000 on 1/12/2017.
 */
let RenderController = (function () {

    return {
        ctx: null,
        viewList: [],
        canvasWidth: null,
        canvasHeight: null,

        init: function () {
            this.viewList = [];
            this.ctx = Canvas.context;
            this.canvasWidth = Canvas.width;
            this.canvasHeight = Canvas.height;
        },

        addView: function (_actorInstance) {
            Assert.is( _actorInstance instanceof Figure, "!Can only add of class Figure to the addView method in RenderController!" );
            this.viewList.push( new View(_actorInstance) );
        },

        render: function() {
            this.ctx.clearRect( 0, 0, this.canvasWidth, this.canvasHeight );
            for (let i = this.viewList.length - 1; i >= 0; i--) {
                this.viewList[i].render();
            }
        }
    };
})();