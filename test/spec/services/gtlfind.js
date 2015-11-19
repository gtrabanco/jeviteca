'use strict';

describe('Service: gtlFind', function () {

  // load the service's module
  beforeEach(module('jevitecaApp'));

  // instantiate service
  var gtlFind;
  beforeEach(inject(function (_gtlFind_) {
    gtlFind = _gtlFind_;
  }));

  it('should do something', function () {
    expect(!!gtlFind).toBe(true);
  });

});
