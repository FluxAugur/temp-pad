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
    this.__controllerPath = "index";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        layout: "vertical",
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.header = Ti.UI.createView({
        height: "32%",
        id: "header"
    });
    $.__views.index.add($.__views.header);
    $.__views.viewHeaderEssential = Ti.UI.createView({
        height: Ti.UI.SIZE,
        marginTop: "6%",
        id: "viewHeaderEssential"
    });
    $.__views.header.add($.__views.viewHeaderEssential);
    $.__views.imageViewScadPadLogo = Ti.UI.createImageView({
        image: "images/scadpad-logo.png",
        width: "18%",
        left: "7%",
        id: "imageViewScadPadLogo"
    });
    $.__views.viewHeaderEssential.add($.__views.imageViewScadPadLogo);
    $.__views.imageViewHome = Ti.UI.createImageView({
        image: "images/home.png",
        width: "8%",
        right: "27%",
        id: "imageViewHome"
    });
    $.__views.viewHeaderEssential.add($.__views.imageViewHome);
    $.__views.imageViewAboutScad = Ti.UI.createImageView({
        image: "images/about-scad.png",
        width: "16%",
        right: "7%",
        centerY: "no",
        id: "imageViewAboutScad"
    });
    $.__views.viewHeaderEssential.add($.__views.imageViewAboutScad);
    $.__views.imageViewPadLearn = Ti.UI.createImageView({
        image: "images/padlearn-hero-unit.png",
        width: Ti.UI.FILL,
        id: "imageViewPadLearn"
    });
    $.__views.header.add($.__views.imageViewPadLearn);
    $.__views.content = Ti.UI.createView({
        height: "62%",
        id: "content"
    });
    $.__views.index.add($.__views.content);
    $.__views.footer = Ti.UI.createView({
        height: "6%",
        id: "footer"
    });
    $.__views.index.add($.__views.footer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;