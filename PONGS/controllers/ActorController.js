/**
 * Created by Dillon_Cordova on 12/4/2016.
 */
let ActorController = (function () {
    let actorList;
    let enemyList;
    let friendlyList;

    return {
        input: null,

        init: function (_input) {
            actorList = [];
            enemyList = [];
            friendlyList = [];

            this.input = _input;
        },
        isInitialized: function() {
            return !!actorList;
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
            for (let i = actorList.length - 1; i >= 0; --i) {
                let curActor = actorList[i];
                curActor.tick(actorList, this.input);
                curActor.physics();
            }
        }
    };
})();