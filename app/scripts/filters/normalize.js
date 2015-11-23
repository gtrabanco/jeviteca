'use strict';

/**
 * @ngdoc filter
 * @name jevitecaApp.filter:normalize
 * @function
 * @description
 * # normalize
 * Filter in the jevitecaApp.
 */
angular.module('jevitecaApp')
  .filter('normalize', function () {
    return function (input) {

        if (angular.isString(input)) {
            return input.replace(/[^a-zA-Z0-9.]+/g,'');
        }

        return input;
    };
  });
