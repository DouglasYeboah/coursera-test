(function () {
    'use strict';

    angular.module("MenuApp")
        .constant('apiBasePath', "https://davids-restaurant.herokuapp.com")
        .service("MenuDataService", MenuDataService);

    MenuDataService.injector = ["$http", "apiBasePath"];
    function MenuDataService($http, apiBasePath) {
        var service = this;

        service.getAllCategories = function () {
            return $http({
                url: apiBasePath + "/categories.json"
            }).then(function (response) {
                return response.data;
            });
        };

        service.getItemsForCategory = function (category) {
            return $http({
                url: apiBasePath + "/menu_items.json",
                params: {
                    category: category
                }
            }).then(function (response) {
                return response.data.menu_items;
            });
        };
    }
})();
