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
                genre: '=data', //The model of genre object
                type: '=', //Type of the info you want about
                largeId: '='
            },
            link: ['scope', 'element', 'attrs', '$location', '$filter', 'GenresService', function postLink(scope, element,
                                                                                                           attrs, $location,
                                                                                                           $filter, GenresService) {


                console.log('The value of gente in gtlGenre.js is ', scope.genre);
                debugger;
                //Initial values
                scope.type = ['text', 'medium', 'large'].indexOf(scope.type) !== -1? scope.type : 'text';
                scope.largeId = $filter('isNumeric')(scope.largeId)?parseInt(scope.largeId):-1;
                scope.albumstype = 'cover';

                //Function to go genre
                scope.goToGenre = function () {

                    if (scope.type !== 'text') {
                        scope.type = scope.type === 'medium'?'large':'medium';
                    } else {
                        $location.path('/genres/' + (scope.genre.id || ''));
                    }
                }
            }]
        };
    });
