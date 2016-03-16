'use strict';

describe('Controller: LoginCtrlCtrl', function () {

  // load the controller's module
  beforeEach(module('primoTestApp'));

  var LoginCtrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoginCtrlCtrl = $controller('LoginCtrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
