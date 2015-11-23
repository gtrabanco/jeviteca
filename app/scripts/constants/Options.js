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
        albumImages:'images/albumart/',
        nav: {
            title: 'Jeviteca',
            home: {
                route: '#/',
                icon: 'fa fa-home'
            },
            routes: [
                {
                    title: 'Albums',
                    url: ['albums'],
                    icon: 'fa fa-dot-circle-o'
                },
                {
                    title: 'Bands',
                    url: ['bands'],
                    icon: 'fa fa-group'
                }
            ]
        }
    });
