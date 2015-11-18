'use strict';

/**
 * @ngdoc filter
 * @name jevitecaApp.filter:imageSource
 * @function
 * @description Filter to add the image to an url
 * # imageSource
 * Filter in the jevitecaApp.
 */

var imageSource = ['Options', function (Options) {

    return function (input) {
        if (typeof(input) === "undefined" || input.length === 0) {
            input = 'no_album_art.jpg';
        }
        //window.console.log(input);
        return Options.albumImages + input;
    }

}];
angular.module('jevitecaApp')
  .filter('imageSource', imageSource);
