'use strict';

/**
 * @ngdoc directive
 * @name jevitecaApp.directive:gtlBack
 * @description
 * # gtlBack
 */
angular.module('jevitecaApp')
  .directive('gtlBack', function () {
    return {
      template: '<div class="go-back"> <a class="clickable" ng-click="goBack()">< Go Back</a> </div>',
      restrict: 'AE',
      link: function postLink(scope, element, attrs) {
        scope.goBack = function () {
            window.history.back();
        };
      }
    };
  });
