'use strict';

/**
 * @ngdoc directive
 * @name jevitecaApp.directive:gtlNav
 * @description
 * # gtlNav
 */
angular.module('jevitecaApp')
  .directive('gtlNav', ['$route', 'Options', function ($route, Options) {
    return {
      templateUrl: 'views/directives/gtlNav.html',
      restrict: 'AE',
      link: function (scope, element, attrs) {

          scope.options = Options.nav;
          scope.routes = Options.nav.routes;
      }
    };
  }]);
