'use strict';

describe('Filter: normalize', function () {

  // load the filter's module
  beforeEach(module('jevitecaApp'));

  // initialize a new instance of the filter before each test
  var normalize;
  beforeEach(inject(function ($filter) {
    normalize = $filter('normalize');
  }));

  it('should return the input prefixed with "normalize filter:"', function () {
    var text = 'angularjs';
    expect(normalize(text)).toBe('normalize filter: ' + text);
  });

});
