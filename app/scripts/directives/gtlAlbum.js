'use strict';

/**
 * @ngdoc directive
 * @name jevitecaApp.directive:gtlAlbum
 * @description
 * # gtlAlbum
 */

//Help url: https://docs.angularjs.org/guide/directive
angular.module('jevitecaApp')
    .directive('gtlAlbum', ['gtlStorage', '$location', function (gtlStorage, $location) {
        return {
            templateUrl: 'views/directives/gtlAlbum.html',
            //controller: 'AlbumdirectiveCtrl',
            restrict: 'AE', //There is also a C option
            scope: {
                //@ reads the attribute value, = provides two-way binding, & works with functions
                album: '=disc',
                type: '=' //cover (just the cover), short (Title, genre, band and cover), detailed (all album info)
            },
            link: function (scope) {

                //Setting default values
                if (typeof(scope.albums) === 'array' && scope.albums.length === 1) {
                    scope.albums = scope.albums[0];
                }

                // Functions
                /**
                 * Go to album function
                 */
                scope.goToAlbum = function () {
                    //*
                    if (scope.type !== 'large') {
                        $location.path('/albums/' + scope.album.id);
                    }
                };
            }
        };
    }]);
