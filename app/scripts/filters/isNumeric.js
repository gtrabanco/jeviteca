'use strict';

/**
 * @ngdoc filter
 * @name jevitecaApp.filter:isNumber
 * @function
 * @description
 * # isNumber
 * Filter in the jevitecaApp.
 */
angular.module('jevitecaApp')
    .filter('isNumeric', function () {
        return function (input) {
            return !isNaN(parseInt(input)) && isFinite(input);
        };
    });
