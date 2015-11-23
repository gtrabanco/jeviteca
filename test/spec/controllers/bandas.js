'use strict';

describe('Controller: BandasCtrl', function () {

  // load the controller's module
  beforeEach(module('jevitecaApp'));

  var BandasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BandasCtrl = $controller('BandasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BandasCtrl.awesomeThings.length).toBe(3);
  });
});
