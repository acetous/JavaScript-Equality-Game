'use strict';

describe('Controller: EqualsCtrl', function () {

  // load the controller's module
  beforeEach(module('javaScriptEqualityApp'));

  var EqualsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EqualsCtrl = $controller('EqualsCtrl', {
      $scope: scope
    });
  }));

  it('should return', function () {
    expect(true).toBe(true);
  });
});
