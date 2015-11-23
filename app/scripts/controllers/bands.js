'use strict';

/**
 * @ngdoc function
 * @name jevitecaApp.controller:BandsCtrl
 * @description
 * # BandsCtrl
 * Controller of the jevitecaApp
 */
angular.module('jevitecaApp')
  .controller('BandsCtrl', ['$scope', '$filter', '$route', '$routeParams', /*, 'Bands', '$timeout', */ function ($scope, $filter, $route, $routeParams, BandsService /*, Bands, $timeout */) {
        //Define if a view is a detailed of album or not
        $scope.detailed = false;
        $scope.albumsType = 'cover';
        $scope.bandsType = 'medium';
        $scope.bands = [];

        //$timeout(function () {
        //    $scope.bands = Bands.data;
        //}, 1);
        //
        //
        ////Check if the user wants to see a detailed view of specific album
        //if (typeof($routeParams.id) !== 'undefined' && $filter('isNumeric')($routeParams.id)) {
        //
        //    var index = parseInt($routeParams.id);
        //    $scope.detailed = true;
        //
        //    $scope.bands = $filter('filter')($scope.bands, {id: index}, function (x, y) {
        //        return x === y;
        //    });
        //}


        BandsService.getAllBands().then(
            function (results) {
                $scope.bands = results.data;
                $scope.albumsType = 'cover';

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
        //*/
  }]);
