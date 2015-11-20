'use strict';

/**
 * @ngdoc directive
 * @name jevitecaApp.directive:gtlAlbum
 * @description
 * # gtlAlbum
 */

//Help url: https://docs.angularjs.org/guide/directive
angular.module('jevitecaApp')
    .directive('gtlAlbum', ['gtlStorage', '$location', 'Options', function (gtlStorage, $location, Options) {
        return {
            templateUrl: 'views/directives/gtlAlbum.html',
            //controller: 'AlbumdirectiveCtrl',
            restrict: 'AE', //There is also a C option
            scope: {
                //@ reads the attribute value, = provides two-way binding, & works with functions
                album: '=disc',
                detailed: '='
            },
            link: function (scope) {

                console.log(scope.album);

                //Setting default values for rateId and favorited
                var strVarAlbum = 'album' + scope.album.id;
                scope.rateId = 'rate' + scope.album.id;

                //Functions

                //Go to the album
                scope.goToAlbum = function () {
                    //*
                    if (!scope.detailed) {
                        $location.path('/albums/' + scope.album.id);
                    }
                    //*/

                    //Another way to do it, but shows all info in the same page
                    //scope.detailed = !scope.detailed;
                };

                /* Old code, I avoided to use a watcher to improve it and delete
                   data from localStorage if possible, I keep it to learn in future or
                   as example of watcher
                scope.$watch('favorited', function (newValue, oldValue) {

                    //To avoid false changes
                    if (oldValue !== newValue) {
                        gtlStorage.setNamespace('favorites');
                        gtlStorage.set(strVarAlbum, newValue);
                    }
                });
                */
            }
        };
    }]);
