'use strict';

/**
 * @ngdoc filter
 * @name jevitecaApp.filter:concat
 * @function
 * @description
 * # concat
 * Filter in the jevitecaApp.
 */

angular.module('jevitecaApp')
  .filter('concat', function () {
    return function (input, before, after) {
      before = typeof(before) !== 'undefined'?before:'';
      after = typeof(after) !== 'undefined'?after:'';
      return before + input + after;
    };
  });
