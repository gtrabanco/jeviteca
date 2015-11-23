'use strict';

/**
 * @ngdoc service
 * @name jevitecaApp.Bands
 * @description
 * # Bands
 * Service in the jevitecaApp.
 */

var bandsService = ['Options', '$http', function (Options, $http) {
    //Get all the albums
    this.getAllBands = function () {
        return $http.get(Options.urlBands, { cache: true});
    };
}];

angular.module('jevitecaApp')
  .service('BandsService', bandsService);
