'use strict';

/**
 * @ngdoc function
 * @name jevitecaApp.controller:AlbumsCtrl
 * @description
 * # AlbumsCtrl
 * Controller of the jevitecaApp
 */

var albumsCtrl = ['$scope', '$route', '$routeParams', 'Albums', '$filter', function ($scope, $route, $routeParams, Albums, $filter ) {

    //*//
    $scope.type = 'short';

    $scope.albums = Albums.data;

    //Check if the user wants to see a detailed view of specific album
    if (typeof($routeParams.id) !== 'undefined' && $filter('isNumeric')($routeParams.id)) {

        var index = parseInt($routeParams.id);
        $scope.type = 'large';

        //$scope.albums = gtlFind({id: index}, $scope.albums);
        $scope.albums = $filter('filter')($scope.albums, {id:index}, function (x, y) {
            return x === y;
        });
    }
}];

angular.module('jevitecaApp')
    .controller('AlbumsCtrl', albumsCtrl);
