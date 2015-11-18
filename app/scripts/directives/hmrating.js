'use strict';

/**
 * @ngdoc directive
 * @name jevitecaApp.directive:hmRating
 * @description
 * # hmRating
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
      link : function(scope,element,attr){
        scope.setrating(0);
      },
      controller: ['$scope', function($scope){

        $scope.setrating = function(r){
          ratingEffect(r);
          $scope.rate = r;
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
      }]
    };
});
