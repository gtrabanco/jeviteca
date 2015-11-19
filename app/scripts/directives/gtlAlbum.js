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

                //Setting default values for rateId and favorited
                var strVarAlbum = 'album' + scope.album.id;
                scope.rateId = 'rate' + scope.album.id;

                gtlStorage.setNamespace('favorites');
                scope.favorited = gtlStorage.get(strVarAlbum) || false;




                //Functions

                //Go to the album
                scope.goToAlbum = function () {
                    if (!scope.detailed) {
                        $location.path('/albums/' + scope.album.id);
                    }
                };

                //Go back in history
                scope.goBack = function () {
                    window.history.back();
                };

                //To add/delete favorite
                scope.switchFavorite = function () {
                    scope.favorited = !scope.favorited;
                    gtlStorage.setNamespace('favorites');

                    if (scope.favorited) {
                        gtlStorage.set(strVarAlbum, true);
                    } else {
                        gtlStorage.remove(strVarAlbum);
                    }
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
