'use strict';

/**
 * @ngdoc overview
 * @name jevitecaApp
 * @description
 * # jevitecaApp
 *
 * Main module of the application.
 */
angular
    .module('jevitecaApp', [
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/albums/:id?', {
                templateUrl: 'views/albums.html',
                controller: 'AlbumsCtrl',
                controllerAs: 'Albums',
                resolve: {
                    Albums: ['AlbumsService', function (AlbumsService) {
                        return AlbumsService.getAllAlbums();
                    }]
                }})
            .when('/bands/:id?', {
                templateUrl: 'views/bands.html',
                controller: 'BandsCtrl',
                controllerAs: 'bands',
                resolve: {
                    Bands: ['BandsService', function (BandsService) {
                        return BandsService.getAllBands();
                    }]
                }})
            .when('/genres/:id?', {
                templateUrl: 'views/genres.html',
                controller: 'GenresCtrl',
                controllerAs: 'genres',
                resolve: {
                    Bands: ['GenresService', function (GenresService) {
                        return GenresService.getAllGenres();
                    }]
                }})
            .otherwise({
                redirectTo: '/albums'
            });
    });
