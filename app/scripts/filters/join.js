'use strict';

/**
 * @ngdoc filter
 * @name jevitecaApp.filter:join
 * @function
 * @description Function to join a array of elements in a phrase.
 * # join
 * Filter in the jevitecaApp.
 */
angular.module('jevitecaApp')
  .filter('join', function () {
    return function (input, glue, endText) {
      if (typeof(glue) === "undefined") {
        glue = ', ';
      }

      if (typeof(endText) === "undefined") {
        endText = '';
      }

      return input.join(glue) + endText;
    }
  });
