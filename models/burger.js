var orm = require("../config/orm.js");

// create a function(s) to have burgers chosen and devoured
var burger = {
    create: function(name) {
        orm.create("burgers", [
            "burger_name", "devoured"
        ], [
            name, true
        ]);
    },
// if chosen burger is devoured, update
    update: function(id) {
        orm.update("burgers", [
            "burger_name", "devoured"
        ], [
            devoured, true
        ]);
    },
};

module.exports = burger;