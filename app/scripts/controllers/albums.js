'use strict';

/**
 * @ngdoc function
 * @name jevitecaApp.controller:AlbumsCtrl
 * @description
 * # AlbumsCtrl
 * Controller of the jevitecaApp
 */

var albumsCtrl = ['$scope', '$route', '$routeParams', 'AlbumsService', function ($scope, $route, $routeParams, AlbumsService) {

    function isNumeric(n) {
        return !isNaN(parseInt(n)) && isFinite(n);
    }

    //*//
    //Define if a view is a detailed of album or not
    $scope.detailed = false;

    //Check if the user wants to see a detailed view of specific album
    if (typeof($routeParams.id) !== 'undefined' && isNumeric($routeParams.id)) {

        var index = parseInt($routeParams.id);
        $scope.detailed = true;

        AlbumsService.find({id: index}). then(
            function (results) {
                if (results.length > 0) {
                    $scope.albums = results[0];
                }
            }
        )

    } else { //If the user wants to see all
        AlbumsService.getAllAlbums().then(
            function (albums) {
                $scope.albums = albums.data;
            }
        );
        //window.console.log($scope.albums);
    }

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
