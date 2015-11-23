'use strict';

/**
 * @ngdoc directive
 * @name jevitecaApp.directive:gtlGenre
 * @description
 * # gtlGenre
 */
angular.module('jevitecaApp')
    .directive('gtlGenre', ['$location', '$filter', 'GenresService', function postLink($location, $filter, GenresService) {
        return {
            templateUrl: 'views/directives/gtlGenre.html',
            restrict: 'AE',
            scope: {
                genre: '=', //The model of genre object
                type: '=', //Type of the info you want about
                largeId: '='
            },
            link: function postLink(scope, element, attrs) {


                //console.log('The genre ',scope.genre);
                //Initial values
                scope.type = ['text', 'medium', 'large'].indexOf(scope.type) !== -1? scope.type : 'text';
                scope.largeId = parseInt(scope.largeId);
                scope.albumsType = 'cover';

                //If the name is the same as largeName then force large Genre
                scope.type = scope.largeId === scope.genre.id?'large':scope.type;

                //Function to go genre
                scope.goToGenre = function () {

                    //console.log('Clicked');
                    if (scope.type !== 'text') {
                        scope.type = scope.type === 'medium'?'large':'medium';
                    } else {
                        $location.path('/genres/' + (scope.genre.id || ''));
                    }
                    //console.log(scope.type);
                };
            }
        };
    }]);
