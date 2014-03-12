function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "header";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.viewHeader = Ti.UI.createView({
        height: "5%",
        width: "100%",
        top: "2%",
        id: "viewHeader"
    });
    $.__views.viewHeader && $.addTopLevelView($.__views.viewHeader);
    $.__views.imageViewScadPadLogo = Ti.UI.createImageView({
        image: "images/scadpad-logo.png",
        width: "18%",
        left: "7%",
        id: "imageViewScadPadLogo"
    });
    $.__views.viewHeader.add($.__views.imageViewScadPadLogo);
    $.__views.labelAboutScad = Ti.UI.createLabel({
        color: "#6e6f72",
        font: {
            fontSize: 12
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: "16%",
        right: "7%",
        text: "About SCAD",
        id: "labelAboutScad"
    });
    $.__views.viewHeader.add($.__views.labelAboutScad);
    $.__views.labelHome = Ti.UI.createLabel({
        color: "#6e6f72",
        font: {
            fontSize: 12
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: "12%",
        right: "23%",
        text: "Home",
        id: "labelHome"
    });
    $.__views.viewHeader.add($.__views.labelHome);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;