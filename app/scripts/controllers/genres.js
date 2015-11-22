'use strict';

/**
 * @ngdoc function
 * @name jevitecaApp.controller:GenresCtrl
 * @description
 * # GenresCtrl
 * Controller of the jevitecaApp
 */
angular.module('jevitecaApp')
    .controller('GenresCtrl', ['$scope', 'Genres', '$route', '$routeParams', '$filter', function ($scope, Genres,
                                                                                       $route, $routeParams, $filter) {
        //Define if a view is a detailed of album or not
        $scope.genretype = 'medium';
        $scope.albumstype = 'cover';
        $scope.largeId   = 0;
        $scope.genres = Genres.data;

        //Check if the user wants to see a detailed view of specific album
        if (typeof($routeParams.id) !== 'undefined' && $filter('isNumeric')($routeParams.id)) {
            $scope.largeId = parseInt($routeParams.id);
        }
    }]);
