/**
 * Created by Dillon_Cordova on 12/4/2016.
 */
var ActorController = (function () {
    var actorList;
    var enemyList;
    var friendlyList;

    return {
        ctx: null,
        input: null,
        canvasWidth: null,
        canvasHeight: null,

        init: function (_ctx, _canvasHeight, _canvasWidth, _input) {
            actorList = [];
            enemyList = [];
            friendlyList = [];

            this.ctx =_ctx;
            this.input = _input;
            this.canvasWidth = _canvasWidth;
            this.canvasHeight = _canvasHeight;
        },
        addActor: function(_actor) {
            Assert.is( _actor instanceof Actor, "Can only add of class Actor to the addActor method in ActorController!" );
            actorList.push(_actor);
        },
        addEnemy: function(_actor) {
            Assert.is( _actor instanceof Enemy, "Can only add of class Enemy to the addEnemy method in ActorController!" );
            enemyList.push(_actor);
        },
        addFriendly: function(_actor) {
            Assert.is( _actor instanceof Actor, "Can only add actors to this controller!" );
            friendlyList.push(_actor);
        },

        tick: function() {
            for (var i = actorList.length - 1; i >= 0; --i) {
                // actorList[i].input(input);
                actorList[i].tick(actorList, this.input);
                actorList[i].physics();
            }
        },

        render: function() {
            this.ctx.clearRect( 0, 0, this.canvasWidth, this.canvasHeight );
            for (var i = actorList.length - 1; i >= 0; i--) {
                actorList[i].draw(this.ctx);
            }
        }
    };

})();