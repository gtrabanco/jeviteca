'use strict';

/**
 * @ngdoc directive
 * @name jevitecaApp.directive:gtlRating
 * @description
 * # gtlRating
 */
angular.module('jevitecaApp')
    .directive('gtlRating', function () {
        return {
            templateUrl: 'views/directives/gtlRating.html',
            restrict: 'AE',
            scope: {
                namespace: '@',
                var: '@',
                stars: '='
            },
            link: ['scope','element','attr', 'gtlStorage', function(scope, element, attr, gtlStorage){

                //Initial values
                scope.namespace = $filter('normalize')(scope.namespace || 'rates');
                scope.var = $filter('normalize')(scope.var) || 'var';
                gtlStorage.setNamespace(scope.namespace);
                scope.setRate(gtlStorage.get(scope.var) || 0);
                scope.srate = 0;


                scope.setRate = function (rate) {
                    scope.rate = rate;

                    gtlStorage.setNamespace(scope.namespace);

                    if (r > 0) {
                        gtlStorage.set(scope.var, rate);
                    } else {
                        gtlStorage.remove(scope.var);
                    }
                };

                scope.getNumbers = function (number) {
                    return new Array(number);
                };

                scope.overStar = function (rate) {
                    scope.srate = rate;
                };

                scope.leaveStars = function (rate) {
                    scope.srate = rate;
                };
            }]
        };
    });
