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
      template: '<div class="fav"><i ng-class="{\'fa fa-heart\':favorited, \'fa fa-heart-o\':!favorited}" ng-click="switchFavorite()"></i></div>',
      restrict: 'AE',
        scope: {
            namespace: '@', //Namespace in the localStorage where favorites are stored (default: favorites)
            var: '@' //Var in the localStorage where this favorite is stored (default: var)
        },
      link: function postLink(scope, element, attrs) {


          //Normalize the values
          var normalize  = $filter('normalize');
          var namespace  = normalize(scope.namespace);
          var storageVar = normalize(scope.var);


          // Get if it is favorited
          gtlStorage.setNamespace(namespace);
          scope.favorited = gtlStorage.get(storageVar);

          //To add/delete favorite
          scope.switchFavorite = function () {
              scope.favorited = !scope.favorited;
              gtlStorage.setNamespace(namespace);
              gtlStorage.set(storageVar, scope.favorited);
          };

          //We could save the change in the favorite with a $watcher but I think is not the proper way in this case
      }
    };
  }]);
