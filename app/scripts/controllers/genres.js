'use strict';

/**
 * @ngdoc function
 * @name jevitecaApp.controller:GenresCtrl
 * @description
 * # GenresCtrl
 * Controller of the jevitecaApp
 */
angular.module('jevitecaApp')
  .controller('GenresCtrl', ['$scope','Genres', '$route', '$routeParams', '$filter', '$timeout', function ($scope, Genres, $route, $routeParams, $filter, $timeout) {

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
        }
  }]);
