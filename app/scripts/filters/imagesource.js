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
        return Options.albumImages + input;
    }

}];
angular.module('jevitecaApp')
  .filter('imageSource', imageSource);
