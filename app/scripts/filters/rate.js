'use strict';

/**
 * @ngdoc filter
 * @name jevitecaApp.filter:rate
 * @function
 * @description
 * # rate
 * Filter in the jevitecaApp.
 */
angular.module('jevitecaApp')
  .filter('range', function() {
      return function(input, total) {
        total = parseInt(total);
        for (var i=1; i<=total; i++)
          input.push(i);
        return input;
      };
});
