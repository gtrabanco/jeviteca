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
      .when('/albums', {
        templateUrl: 'views/albums.html',
        controller: 'AlbumsCtrl',
        controllerAs: 'Albums'
      })
      .when('/albums/:id', {
        templateUrl: 'views/albumsid.html',
        controller: 'AlbumsidCtrl',
        controllerAs: 'albumsId'
      })
      .otherwise({
        redirectTo: '/albums'
      });
  });
