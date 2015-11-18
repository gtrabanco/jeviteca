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
        controllerAs: 'Albums'
      }).otherwise({
        redirectTo: '/albums'
      });
  });
