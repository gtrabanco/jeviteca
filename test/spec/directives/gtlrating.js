'use strict';

describe('Directive: gtlRating', function () {

  // load the directive's module
  beforeEach(module('jevitecaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<gtl-rating></gtl-rating>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the gtlRating directive');
  }));
});
