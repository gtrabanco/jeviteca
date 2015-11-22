'use strict';

describe('Controller: GenresCtrl', function () {

  // load the controller's module
  beforeEach(module('jevitecaApp'));

  var GenresCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GenresCtrl = $controller('GenresCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GenresCtrl.awesomeThings.length).toBe(3);
  });
});
