'use strict';

describe('Directive: gtlBack', function () {

  // load the directive's module
  beforeEach(module('jevitecaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<gtl-back></gtl-back>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the gtlBack directive');
  }));
});
