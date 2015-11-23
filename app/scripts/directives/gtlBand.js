'use strict';

/**
 * @ngdoc directive
 * @name jevitecaApp.directive:gtlBand
 * @description
 * # gtlBand
 */
//Help url: https://docs.angularjs.org/guide/directive
angular.module('jevitecaApp')
    .directive('gtlBand', ['BandsService', '$filter', '$location', function (BandsService, $filter, $location) {
        return {
            templateUrl: 'views/directives/gtlBand.html',
            //controller: 'AlbumdirectiveCtrl',
            restrict: 'AE', //There is also a C option
            scope: {
                //@ reads the attribute value, = provides two-way binding, & works with functions
                band: '=',
                type: '=' //Boolean number to watch all infor about the band or not
            },
            link: function (scope) {

                scope.goToBand = function () {
                    $location.path('/bands/' + scope.band.id);
                };

                if (typeof(scope.type) === 'undefined' || ['short', 'medium', 'large'].indexOf(scope.type) === -1) {
                    scope.type = 'short';
                }

                if ($filter('isNumeric')(scope.band)) {
                    BandsService.getAllBands().then(
                        function (bands) {
                            scope.band = $filter('filter')(bands.data, {id:parseInt(scope.band)})[0] || {};
                            //window.console.log(scope.band);
                        }
                    );
                }
            }
        }
    }]);
