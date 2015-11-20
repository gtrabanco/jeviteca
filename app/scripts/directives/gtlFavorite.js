'use strict';

/**
 * @ngdoc directive
 * @name jevitecaApp.directive:gtlFavorite
 * @description
 * # gtlFavorite
 */
angular.module('jevitecaApp')
  .directive('gtlFav', ['gtlStorage', '$filter', function (gtlStorage, $filter) {
    return {
      template: '<i ng-class="{\'fav fa fa-heart\':favorited, \'fav fa fa-heart-o\':!favorited}" ng-click="switchFavorite()"></i>',
      restrict: 'AE',
        scope: {
            namespace: '@', //Namespace in the localStorage where favorites are stored (default: favorites)
            var: '@' //Var in the localStorage where this favorite is stored (default: var)
        },
      link: function postLink(scope, element, attrs) {

          //window.console.log(scope.namespace, 'var = ', scope.var, ' the value ', scope.favorited);

          scope.namespace = $filter('normalize')(scope.namespace || 'favorites');
          scope.var = $filter('normalize')(scope.var || 'var');

          // Get if it is favorited
          gtlStorage.setNamespace(scope.namespace);
          scope.favorited = gtlStorage.get(scope.var);

          //To add/delete favorite
          scope.switchFavorite = function () {
              scope.favorited = !scope.favorited;
              gtlStorage.setNamespace('favorites');
              gtlStorage.set(scope.var, scope.favorited);

              //window.console.log(scope.namespace, 'var = ', scope.var, ' the value ', scope.favorited);

              /*
              if (scope.favorited) {
                  gtlStorage.set(scope.var, scope.favorited);
              } else {
                  gtlStorage.remove(scope.var);
              }
              //*/
          };

          //We could save the change in the favorite with a $watcher but I think is not the proper way in this case
      }
    };
  }]);
