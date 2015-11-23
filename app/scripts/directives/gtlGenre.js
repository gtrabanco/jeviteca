'use strict';

/**
 * @ngdoc directive
 * @name jevitecaApp.directive:gtlGenre
 * @description
 * # gtlGenre
 */
angular.module('jevitecaApp')
  .directive('gtlGenre', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the gtlGenre directive');
      }
    };
  });
