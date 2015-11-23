'use strict';

describe('Filter: isNumber', function () {

  // load the filter's module
  beforeEach(module('jevitecaApp'));

  // initialize a new instance of the filter before each test
  var isNumber;
  beforeEach(inject(function ($filter) {
    isNumber = $filter('isNumber');
  }));

  it('should return the input prefixed with "isNumber filter:"', function () {
    var text = 'angularjs';
    expect(isNumber(text)).toBe('isNumber filter: ' + text);
  });

});
