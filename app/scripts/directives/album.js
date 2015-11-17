'use strict';

/**
 * @ngdoc directive
 * @name jevitecaApp.directive:album
 * @description
 * # album
 */
angular.module('jevitecaApp')
  .directive('album', function () {
    return {
      templateUrl: 'views/directives/album.html',
      restrict: 'AE',
      link: function postLink(scope, element, attrs) {
        element.text('this is the album directive');
      }
    };
  });
