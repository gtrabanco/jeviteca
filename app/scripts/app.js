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
            .when('/bandas/:id', {
              templateUrl: 'views/bandas.html',
              controller: 'BandasCtrl',
              controllerAs: 'bandas',
                resolve: {
                    Bands: ['BandsService', function (BandsService) {
                        return [{name: 'Uno'}, {name: 'Dos'}];
                    }]
                }
            })
            .otherwise({
                redirectTo: '/bandas'
            });
    });
