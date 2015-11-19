'use strict';

/**
 * @ngdoc service
 * @name jevitecaApp.gtlFind
 * @description
 * # gtlFind
 * Factory in the jevitecaApp.
 */
angular.module('jevitecaApp')
    .factory('gtlFind', ['$q', function ($q) {


        //var findInArray = function (obj, arraySearchIn) {
        return function (obj, arraySearchIn) {
            //Filter the albums
            return arraySearchIn.filter(function (item) {
                var compare = true;
                var keysSearch = Object.keys(obj);

                for (var i in keysSearch) {

                    var k = keysSearch[i];

                    if (item[k] !== obj[k]) {

                        compare = false;
                        break;
                        //If any is false the object are not equal
                    }
                }

                //If all evaluations are true we want that album
                if (compare) {
                    return item;
                }
            });
        };

        //Old code
        /**
         * Look for obj in arraySearchIn
         * @param obj
         * @param arraySearchIn
         * @return Promise
         */
        /*
        return {
                findInPromise: function (obj, promiseObj) {

                    //Creating the promise
                    var deferred = $q.defer();

                    promiseObj.then(
                        function (results) {

                            //Filter the albums
                            deferred.resolve(findInArray(obj, results.data));
                        }
                    );

                    return deferred.promise;
                },
                findInArray: findInArray
            };
        */
        }]);
