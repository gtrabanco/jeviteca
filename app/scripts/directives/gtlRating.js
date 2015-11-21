'use strict';

/**
 * @ngdoc directive
 * @name jevitecaApp.directive:gtlRating
 * @description
 * # gtlRating
 */
angular.module('jevitecaApp')
    .directive('gtlRating', ['gtlStorage', '$filter', function (gtlStorage, $filter) {
        return {
            templateUrl: 'views/directives/gtlRating.html',
            restrict: 'AE',
            scope: {
                namespace: '@',
                var: '@',
                stars: '='
            },
            link: function(scope, element, attr){

                //Normalize the namespace and the var
                var normalize = $filter('normalize');
                var namespace = normalize(scope.namespace);
                var storageVar = normalize(scope.var);


                //Functions
                scope.setRate = function (rate) {
                    scope.rate = rate;
                    scope.srate = rate;

                    gtlStorage.setNamespace(namespace);

                    if (rate > 0) {
                        gtlStorage.set(storageVar, rate);
                    } else {
                        gtlStorage.remove(storageVar);
                    }
                };

                scope.overStar = function (rate) {
                    scope.srate = rate;
                };

                scope.leaveStars = function () {
                    scope.srate = scope.rate;
                };

                //Initial values
                gtlStorage.setNamespace(namespace);
                scope.setRate(gtlStorage.get(storageVar) || 0);
                scope.srate = 0;
            }
        };
    }]);
