/**
 * Created by dillo_000 on 2/3/2017.
 */
let CharacterManager = (function() {

    return {
        create: {
            Figure: function () {
                return new Figure();
            },
            Entity: function () {
                return new Entity();
            },
            Player: function () {
                return new Player();
            },
            NPC: function () {
                return new NPC();
            }
        }
    }
});