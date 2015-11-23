'use strict';

/**
 * @ngdoc service
 * @name jevitecaApp.Genres
 * @description
 * # Genres
 * Service in the jevitecaApp.
 */

var genresService = ['Options', '$http', function (Options) {
    //Get all the Genres
    this.getAllAlbums = function () {
      return $http.get(Options.urlAlbums, { cache: true});
    }
}];

angular.module('jevitecaApp')
  .service('GenresService', genresService);
