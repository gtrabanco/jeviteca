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
    .directive('hmrating',function(){
        return {
            restrict: 'EA',
            scope: {
                //@ reads the attribute value, = provides two-way binding, & works with functions
                hmupto:"@",
                hmid:"@",
                hmcolor:'@',
                rate:'=',
                setrating : '&',
                mouseover : '&',
                mouseleave : '&'
            },
            templateUrl: 'views/directives/rating.html',
            link : ['scope','element','attr', 'gtlStorage', function(scope, element, attr, gtlStorage){

                gtlStorage.setNamespace('rates');
                scope.setrating(gtlStorage.get($scope.hmid) || 0);
            }],
            controller: ['$scope', 'gtlStorage', function($scope, gtlStorage){

                $scope.setrating = function(r){
                    //window.console.log('Setting the rate for ', $scope.hmid, ' to ', r);
                    ratingEffect(r);
                    $scope.rate = r;
                    gtlStorage.setNamespace('rates');

                    if (r > 0) {
                        gtlStorage.set($scope.hmid, r);
                    } else {
                        gtlStorage.remove($scope.hmid);
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


                gtlStorage.setNamespace('rates');
                $scope.rate = gtlStorage.get($scope.hmid) || 0;
                ratingEffect($scope.rate);

            }]
        };
    });
