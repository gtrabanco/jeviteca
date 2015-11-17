'use strict';

/**
 * @ngdoc service
 * @name jevitecaApp.Genres
 * @description
 * # Genres
 * Service in the jevitecaApp.
 */

var genresService = ['Options', function (Options) {
    //Get all the Genres
    this.getAlbums = function () {
      return $http.get(Options.urlAlbums, { cache: true});
    }
}];

angular.module('jevitecaApp')
  .service('Genres', genresService);
