'use strict';

/**
 * @ngdoc function
 * @name jevitecaApp.controller:GenresCtrl
 * @description
 * # GenresCtrl
 * Controller of the jevitecaApp
 */
angular.module('jevitecaApp')
    .controller('GenresCtrl', ['$scope', 'GenresService', '$route', '$routeParams', function ($scope, GenresService,
                                                                                       $route, $routeParams) {
        //Define if a view is a detailed of album or not
        $scope.genretype = 'medium';

        GenresService.getAllGenres().then(
            function (results) {
                $scope.albumstype = 'cover';
                $scope.genres = results.data;

                //Check if the user wants to see a detailed view of specific album
                if (typeof($routeParams.id) !== 'undefined' && $filter('isNumeric')($routeParams.id)) {

                    var index = parseInt($routeParams.id);
                    $scope.genretype = 'large';

                    $scope.genres = $filter('filter')(results.data, {id: index}, function (x, y) {
                        return x === y;
                    });
                }
            }
        );
    }]);
