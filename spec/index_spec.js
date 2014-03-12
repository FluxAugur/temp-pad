/**
 * @author Nathanial L. McConnell
 */

// create index controller test suite
describe('Index Controller Test Suite', function() {
  // require alloy to access the controllers
  var Alloy = require('alloy');
  var $;

  beforeEach(function() {
    // create the index controller before executing the test suites
    $ = Alloy.createController('index');
  });

  // create the default index view test suite
  describe('should have default view', function() {
    it('should have an index window', function() {
      expect($.index).toExist();
    });
  });
});