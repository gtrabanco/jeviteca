'use strict';

/**
 * @ngdoc function
 * @name jevitecaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jevitecaApp
 */
angular.module('jevitecaApp')
  .constant('Options', {
      urlAlbums: 'resources/data/albums.json',
      urlBands:  'resources/data/bands.json',
      urlGenres: 'resources/data/genres.json',
      albumImages:'images/albumart/'
  });
