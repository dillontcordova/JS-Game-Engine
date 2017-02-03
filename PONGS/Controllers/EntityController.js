/**
 * Created by Dillon_Cordova on 12/4/2016.
 */
let EntityController = (function () {
    let entityList;
    let enemyList;
    let friendlyList;

    return {
        input: null,

        init: function () {
            entityList = [];
            enemyList = [];
            friendlyList = [];

            this.input = KeyInput.getInstance();
        },
        isInitialized: function() {
            return !!entityList;
        },
        addEntity: function(_entityInstance) {
            Assert.is( _entityInstance instanceof Entity, "Can only add of class Entity to the addEntity method in EntityController!" );
            entityList.push(_entityInstance);
        },
        addEnemy: function(_entityInstance) {
            Assert.is( _entityInstance instanceof Enemy, "Can only add of class Enemy to the addEnemy method in EntityController!" );
            enemyList.push(_entityInstance);
        },
        addFriendly: function(_entityInstance) {
            Assert.is( _entityInstance instanceof Friendly, "Can only add of class Friendly to the addFriendly method in EntityController!" );
            friendlyList.push(_entityInstance);
        },

        tick: function() {
            for (let i = entityList.length - 1; i >= 0; --i) {
                let curEntity = entityList[i];
                curEntity.tick(entityList, this.input);
                curEntity.physics();
            }
        }
    };
})();