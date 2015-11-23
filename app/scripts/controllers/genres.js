'use strict';

/**
 * @ngdoc function
 * @name jevitecaApp.controller:GenresCtrl
 * @description
 * # GenresCtrl
 * Controller of the jevitecaApp
 */
angular.module('jevitecaApp')
  .controller('GenresCtrl', ['$scope','Genres', '$route', '$routeParams', '$filter', '$timeout', '$location', function ($scope, Genres, $route, $routeParams, $filter, $timeout, $location) {

        //Init values
        var isNumeric = $filter('isNumeric');
        $scope.genresType = 'medium';
        $scope.selectedId = -1;

        //Safe $apply
        $timeout(function () {
            $scope.genres = Genres.data;
        }, 1);

        //Check if the user wants to see a detailed view of specific album
        if (typeof($routeParams.id) !== 'undefined' && isNumeric($routeParams.id)) {

            $scope.selectedId = parseInt($routeParams.id);
        } else if ($routeParams.name){
            var result = $filter('filter')(Genres.data, {name: $routeParams.name}, function (x, y) {
                return x === y;
            });

            if (result.length > 0) {
                $location.path('/genres/' + result[0].id).search({});
            }
        }
  }]);
