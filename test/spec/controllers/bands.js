'use strict';

describe('Controller: BandsCtrl', function () {

  // load the controller's module
  beforeEach(module('jevitecaApp'));

  var BandsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BandsCtrl = $controller('BandsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BandsCtrl.awesomeThings.length).toBe(3);
  });
});
