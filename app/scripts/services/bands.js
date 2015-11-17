'use strict';

/**
 * @ngdoc service
 * @name jevitecaApp.Bands
 * @description
 * # Bands
 * Service in the jevitecaApp.
 */

var bandsService = ['Options', function (Options) {
    //Get all the albums
    this.getBands = function () {
      return $http.get(Options.urlBands, { cache: true});
    }
}];

angular.module('jevitecaApp')
  .service('Bands', bandsService);
