'use strict';

/**
 * @ngdoc service
 * @name jevitecaApp.Albums
 * @description
 * # Albums
 * Service in the jevitecaApp.
 */

var albumsService = ['$http', 'Options', '$q', 'gtlFind', function ($http, Options, $q, gtlFind) {
  // AngularJS will instantiate a singleton by calling "new" on this function


    //Get all the albums
    this.getAllAlbums = function () {
      return $http.get(Options.urlAlbums, { cache: true});
    };

    /*
    //Find album by object with key/value
    this.find = function (obj) {
        //Creating the promise
        var deferred = $q.defer();

        this.getAllAlbums().then(
            function (albums) {

                //Filter the albums
                var returnedAlbums = albums.data.filter(function (album) {
                    var compare = true;
                    var keysSearch = Object.keys(obj);

                    for (var i in keysSearch) {

                        var k = keysSearch[i];
                        //*
                        if (album[k] !== obj[k]) {

                            compare = false;
                            break;
                            //If any is false the object are not equal
                        }
                        //* /
                    }

                    //If all evaluations are true we want that album
                    if (compare) {
                        return album;
                    }


                });

                deferred.resolve(returnedAlbums);
            }
        );

        return deferred.promise;
    };
    //*/

    //Find album by object with key/value
    this.find = function (obj) {
        return gtlFind.findInPromise(obj, this.getAllAlbums());
    };
}];

angular.module('jevitecaApp')
  .service('AlbumsService', albumsService);
