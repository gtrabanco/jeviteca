'use strict';

describe('Directive: gtlAlbum', function () {

  // load the directive's module
  beforeEach(module('jevitecaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<gtl-album></gtl-album>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the gtlAlbum directive');
  }));
});
