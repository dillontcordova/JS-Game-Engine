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
        addActor: function(_actorInstance) {
            Assert.is( _actorInstance instanceof Actor, "Can only add of class Actor to the addActor method in ActorController!" );
            actorList.push(_actorInstance);
        },
        addEnemy: function(_actorInstance) {
            Assert.is( _actorInstance instanceof Enemy, "Can only add of class Enemy to the addEnemy method in ActorController!" );
            enemyList.push(_actorInstance);
        },
        addFriendly: function(_actorInstance) {
            Assert.is( _actorInstance instanceof Actor, "Can only add actors to this controller!" );
            friendlyList.push(_actorInstance);
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