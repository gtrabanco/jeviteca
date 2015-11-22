'use strict';

/**
 * @ngdoc function
 * @name jevitecaApp.controller:BandsCtrl
 * @description
 * # BandsCtrl
 * Controller of the jevitecaApp
 */
angular.module('jevitecaApp')
    .controller('BandsCtrl', ['$scope', 'Bands', '$filter', '$route', '$routeParams', function ($scope, Bands, $filter, $route, $routeParams) {
        //Define if a view is a detailed of album or not
        $scope.detailed = false;

        $scope.albumsType = 'cover';
        $scope.bands = Bands.data;
        $scope.bandType = 'medium';

        //Check if the user wants to see a detailed view of specific album
        if (typeof($routeParams.id) !== 'undefined' && $filter('isNumeric')($routeParams.id)) {

            var index = parseInt($routeParams.id);
            $scope.detailed = true;
            $scope.bandtype = 'large';

            $scope.bands = $filter('filter')($scope.bands, {id: index}, function (x, y) {
                return x === y;
            });
        }
    }]);
