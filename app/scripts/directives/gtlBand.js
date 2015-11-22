'use strict';

/**
 * @ngdoc directive
 * @name jevitecaApp.directive:gtlBand
 * @description
 * # gtlBand
 */
//Help url: https://docs.angularjs.org/guide/directive
angular.module('jevitecaApp')
    .directive('gtlBand', ['gtlFind', 'BandsService', '$filter', '$location', function (gtlFind, BandsService, $filter, $location) {
        return {
            templateUrl: 'views/directives/gtlBand.html',
            //controller: 'AlbumdirectiveCtrl',
            restrict: 'AE', //There is also a C option
            scope: {
                //@ reads the attribute value, = provides two-way binding, & works with functions
                band: '=',
                type: '@' //Boolean number to watch all infor about the band or not
            },
            link: function (scope) {
                window.console.log('Band in directive', scope.band);

                scope.goToBand = function () {
                    $location.path('/bands/' + (scope.band.id || ''));
                };

                if (typeof(scope.type) === 'undefined' || ['short', 'medium', 'large'].indexOf(scope.type) === -1) {
                    scope.type = 'short';
                }

                if ($filter('isNumeric')(scope.band)) {
                    //window.console.log('Numeric band? ', $filter('isNumeric')(8));
                    BandsService.getAllBands().then(
                        function (bands) {
                            //scope.band = gtlFind({id: parseInt(scope.band)}, bands.data)[0] || {};
                            scope.band = $filter('filter')(bands.data, {id:parseInt(scope.band)})[0] || {};
                            //window.console.log(scope.band);
                        }
                    );
                }
            }
        }
    }]);
