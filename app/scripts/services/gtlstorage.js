'use strict';

"use strict";

var gtlStorageService = function () {
    var data = {};
    var currentNamespace = 'default';

    /**
     * If the namespace is defined save that namespace, if not save the current
     * @param namespace
     */
    function save(namespace) {
        if (typeof(namespace) !== 'undefined' && namespace.length > 0) {
            localStorage.setItem(namespace, angular.toJson(data[namespace]));
        } else {
            save(currentNamespace);
        }
    }

    /**
     * Get the data from localStorage for the current namespace in the internal
     * data variable and set it if the namespace is undefined
     * @param namespace
     * @returns {{}}
     */
    function getNamespace(namespace) {

        //Ternary to check namespace
        namespace =
            (typeof(namespace) !== 'undefined' && namespace) ?
                currentNamespace : namespace;

        //If the namespace does not exists create it
        if (typeof(data[namespace]) === 'undefined') {

            //Init the namespace object as empty object
            data[namespace] = {};

            //Get the namespace in the localStorage
            var item = localStorage.getItem(namespace);

            //If there is data set it
            if (item) {
                data[namespace] = angular.fromJson(item);
            }
        }

        return data[namespace];
    }

    //We need to init the default namespace and get the data
    getNamespace(currentNamespace);

    return {
        /**
         * Set the namespace as the current namespace
         * @param namespace
         * @returns {gtlLocalStorage}
         */
        setNamespace: function (namespace) {
            currentNamespace = namespace;
            return getNamespace(namespace); //Is redundant pass the namespace
            // in the function but makes the code clear
        },

        /**
         * Get all values in a namespace as object and set it as the current
         * @param namespace
         * @returns {{}}
         */
        getNamespace: function (namespace) {
            return this.setNamespace(namespace);
        },

        /**
         * Set or replace a value of a variable
         * @param variable
         * @param value
         */
        set: function(variable, value) {

            window.console.log('Setting data[', currentNamespace, '][', variable, '] = ', value);

            data[currentNamespace][variable] = value;
            save();

            return this;
        },

        /**
         *
         * @param variable
         */
        get: function (variable) {
            window.console.log('Getting data[', currentNamespace, '][', variable, '] = ', data[currentNamespace][variable]);

            return data[currentNamespace][variable];
        },

        /**
         * Remove a variable in namespace
         * @param variable
         */
        remove: function (variable) {
            delete data[currentNamespace][variable];
            save();
        },

        /**
         * Clear a namespace
         * Make a empty namespace and save it to localStorage
         */
        clear: function () {
            data[currentNamespace] = {};
            save();
        },

        /**
         * localStorage.clear
         * Delete all data in the localStorage and all the namespaces
         * and, finally recreated the current namespace.
         */
        clearAll: function () {
            data = {};
            localStorage.clear();
            this.setNamespace(currentNamespace);
        }
    };
};

/**
 * @ngdoc service
 * @name jevitecaApp.gtlStorage
 * @description
 * # gtlStorage
 * Service in the jevitecaApp.
 */
angular.module('jevitecaApp')
  .service('gtlStorage', gtlStorageService);
