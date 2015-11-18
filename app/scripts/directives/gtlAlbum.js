'use strict';

/**
 * @ngdoc directive
 * @name jevitecaApp.directive:gtlAlbum
 * @description
 * # gtlAlbum
 */

//Help url: https://docs.angularjs.org/guide/directive
angular.module('jevitecaApp')
  .directive('gtlAlbum', function () {
    return {
      templateUrl: 'views/directives/gtlAlbum.html',
      //controller: 'AlbumdirectiveCtrl',
      restrict: 'AE', //There is also a C option
      scope: {
        //@ reads the attribute value, = provides two-way binding, & works with functions
        album: '=disc',
        detailed: '='
      }
    };
  });
