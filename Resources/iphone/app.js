var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.CFG.calculateWidth = function(size) {
    var width;
    try {
        width = size * Titanium.Platform.displayCaps.platformWidth / 100;
    } catch (e) {
        warn("Error accessing display caps for screen density calculation: " + e);
    }
    return width;
};

Alloy.CFG.calculateHeight = function(size) {
    var height;
    try {
        height = size * Titanium.Platform.displayCaps.platformHeight / 100;
    } catch (e) {
        warn("Error accessing display caps for screen density calculation " + e);
    }
    return height;
};

Alloy.createController("index");