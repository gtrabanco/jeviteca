'use strict';

/**
 * @ngdoc function
 * @name jevitecaApp.controller:AlbumsCtrl
 * @description
 * # AlbumsCtrl
 * Controller of the jevitecaApp
 */

var albumsCtrl = ['$scope', '$route', '$routeParams', 'gtlFind', 'AlbumsService', '$filter', function ($scope, $route, $routeParams, gtlFind, AlbumsService, $filter ) {

    //*//
    $scope.type = 'short';

    AlbumsService.getAllAlbums().then(
        function (albums) {
            $scope.albums = albums.data;

            //Check if the user wants to see a detailed view of specific album
            if (typeof($routeParams.id) !== 'undefined' && $filter('isNumeric')($routeParams.id)) {

                var index = parseInt($routeParams.id);
                $scope.type = 'large';

                $scope.albums = gtlFind({id: index}, $scope.albums);
                //$scope.albums = $filter('filter')($scope.albums, {id:index})[0]; //Usando esta vía devuelve
                                                                    // errores AngularJS

                //window.console.log($scope.albums);
            }
        }
    );

    /* Old code
    AlbumsService.getAllAlbums().then(
        function (albums) {

            //Check if the user wants to see a detailed view of specific album
            if (typeof($routeParams.id) !== 'undefined' && isNumeric($routeParams.id)) {

                //window.console.log('Param detected ', $routeParams.id);
                var index = parseInt($routeParams.id) - 1;
                $scope.detailed = true;
                $scope.albums = albums.data[index];

            } else { //If the user wants to see all
                $scope.albums = albums.data;
                //window.console.log($scope.albums);
            }

            //window.console.log($scope.albums);
        },
        function (error) {
            window.console.log('Error');
            $scope.albums = [];
        }
    );
    //*/
}];

angular.module('jevitecaApp')
    .controller('AlbumsCtrl', albumsCtrl);
