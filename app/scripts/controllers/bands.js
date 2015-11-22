'use strict';

/**
 * @ngdoc function
 * @name jevitecaApp.controller:BandsCtrl
 * @description
 * # BandsCtrl
 * Controller of the jevitecaApp
 */
angular.module('jevitecaApp')
  .controller('BandsCtrl', ['$scope', 'BandsService', '$filter', '$route', '$routeParams', function ($scope, BandsService, $filter, $route, $routeParams) {
        //Define if a view is a detailed of album or not
        $scope.detailed = false;

        BandsService.getAllBands().then(
            function (results) {
                $scope.albumstype = 'cover';
                $scope.bands = results.data;

                //Check if the user wants to see a detailed view of specific album
                if (typeof($routeParams.id) !== 'undefined' && $filter('isNumeric')($routeParams.id)) {

                    var index = parseInt($routeParams.id);
                    $scope.detailed = true;

                    $scope.bands = $filter('filter')(results.data, {id: index}, function (x, y) {
                        return x === y;
                    })[0];
                }
            }
        );
  }]);
