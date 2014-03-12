// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

/**
 * @author Nathanial L. McConnell
 */

if (!OS_IOS && !OS_MOBILEWEB) {
  alert('This app is currently only supported on iOS and MobileWeb');
};

Alloy.CFG.calculateWidth = function(size) {
  var width;
  try {
    width = size * Titanium.Platform.displayCaps.platformWidth / 100;
  } catch(e) {
    warn('Error accessing display caps for screen density calculation: ' + e);
  }

  return width;
};

Alloy.CFG.calculateHeight = function(size) {
  var height;
  try {
    height = size * Titanium.Platform.displayCaps.platformHeight / 100;
  } catch(e) {
    warn('Error accessing display caps for screen density calculation ' + e);
  }

  return height;
};
