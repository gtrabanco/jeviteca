'use strict';

describe('Service: gtlStorage', function () {

  // load the service's module
  beforeEach(module('jevitecaApp'));

  // instantiate service
  var gtlStorage;
  beforeEach(inject(function (_gtlStorage_) {
    gtlStorage = _gtlStorage_;
  }));

  it('should do something', function () {
    expect(!!gtlStorage).toBe(true);
  });

});
