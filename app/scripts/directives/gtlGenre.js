'use strict';

/**
 * @ngdoc directive
 * @name jevitecaApp.directive:gtlGenre
 * @description
 * # gtlGenre
 */
angular.module('jevitecaApp')
    .directive('gtlGenre', function () {
        return {
            templateUrl: 'views/directives/gtlGenre.html',
            restrict: 'AE',
            scope: {
                genre: '=moid', //The id or the model of genre object
                type: '@' //Type of the info you want about
            },
            link: ['scope', 'element', 'attrs', '$location', '$filter', 'GenresService', function postLink(scope, element,
                                                                                                           attrs, $location,
                                                                                                           $filter, GenresService) {

                //Initial values
                scope.albumstype = 'cover';
                var isNumeric = $filter('isNumeric');

                //If we do not have all the data we need like the albums, get it!
                // This is due to the versability of the directive
                if (scope.genre && isNumeric(scope.genre) ||
                    scope.type !== 'large' && typeof(scope.genre.id) === 'undefined' ||
                    scope.type !== 'text' && typeof(scope.albums) === 'undefined') {

                    var searchObj = {};

                    if (isNumeric(scope.genre)) {
                        searchObj = {id: parseInt(scope.genre)};
                    } else {
                        searchObj = {name: scope.genre.name};
                    }

                    GenresService.getAllGenres().then(
                        function (results) {
                            var filter = $filter('filter');
                            scope.genre = filter(results.data, searchObj)[0] || {};
                        }
                    );
                }

                //Functions
                scope.goToGenre = function () {
                    if (scope.type === 'text') {
                        $location.path('genres/' + scope.genre.id);
                    } else if(scope.type == 'medium') {
                        scope.type = 'large';
                    } else {
                        scope.type = 'medium';
                    }
                };

            }]
        };
    });
