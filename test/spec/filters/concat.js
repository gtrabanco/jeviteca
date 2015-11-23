'use strict';

describe('Filter: concat', function () {

  // load the filter's module
  beforeEach(module('jevitecaApp'));

  // initialize a new instance of the filter before each test
  var concat;
  beforeEach(inject(function ($filter) {
    concat = $filter('concat');
  }));

  it('should return the input prefixed with "concat filter:"', function () {
    var text = 'angularjs';
    expect(concat(text)).toBe('concat filter: ' + text);
  });

});
