'use strict';

/**
 * @ngdoc directive
 * @name jevitecaApp.directive:hmRating
 * @description
 * # hmRating
 * Downloaded from:
 * Modified by Gabriel Trabanco <http://github.com/gtrabanco>
 */

angular.module('jevitecaApp')
    .directive('hmrating',['$filter', function($filter){
        return {
            restrict: 'EA',
            scope: {
                //@ reads the attribute value, = provides two-way binding, & works with functions
                hmupto:"@",
                hmid:"@",
                hmcolor:'@',
                namespace: '@', //Namespace in the localStorage with gtlStorage
                var: '@', //var in namespace at the localStorage with gtlStorage
                rate:'=',
                setrating : '&',
                mouseover : '&',
                mouseleave : '&'
            },
            templateUrl: 'views/directives/rating.html',
            link : ['scope','element','attr', 'gtlStorage', function(scope, element, attr, gtlStorage){

                scope.namespace = $filter('normalize')(scope.namespace || 'rates');
                scope.var = $filter('normalize')((scope.var + scope.hmid) || ('rId' + scope.hmid));
                gtlStorage.setNamespace(scope.namespace);
                scope.setrating(gtlStorage.get(scope.var) || 0);
            }],
            controller: ['$scope', 'gtlStorage', function($scope, gtlStorage){

                $scope.setrating = function(r){
                    //window.console.log('Setting the rate for ', $scope.hmid, ' to ', r);
                    ratingEffect(r);
                    $scope.rate = r;
                    gtlStorage.setNamespace($scope.namespace);

                    if (r > 0) {
                        gtlStorage.set($scope.var, r);
                    } else {
                        gtlStorage.remove($scope.var);
                    }
                };

                $scope.mouseover = function(r){
                    ratingEffect(r);
                };

                $scope.mouseleave = function(){
                    ratingEffect($scope.rate);
                };

                function ratingEffect(r){
                    for(var i=0;i<=r;i++)
                        angular.element(document.querySelector("#"+$scope.hmid+i)).removeClass("fa-star-o");


                    for(i=0;i<=r;i++)
                        angular.element(document.querySelector("#"+$scope.hmid+i)).addClass("fa-star");

                    for(i=r+1;i<=$scope.hmupto;i++){
                        angular.element(document.querySelector("#"+$scope.hmid+i)).removeClass("fa-star");
                        angular.element(document.querySelector("#"+$scope.hmid+i)).addClass("fa-star-o");
                    }
                }


                gtlStorage.setNamespace($scope.namespace);
                $scope.rate = gtlStorage.get($scope.var) || 0;
                ratingEffect($scope.rate);

            }]
        };
    }]);
