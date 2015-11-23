'use strict';

/**
 * @ngdoc service
 * @name jevitecaApp.Albums
 * @description
 * # Albums
 * Service in the jevitecaApp.
 */

var albumsService = ['$http', 'Options', function ($http, Options) {
//var albumsService = ['$http', 'Options', '$q', 'gtlFind', function ($http, Options, $q, gtlFind) {
  // AngularJS will instantiate a singleton by calling "new" on this function


    //Get all the albums
    this.getAllAlbums = function () {
      return $http.get(Options.urlAlbums, { cache: true});
    };
}];

angular.module('jevitecaApp')
  .service('AlbumsService', albumsService);
