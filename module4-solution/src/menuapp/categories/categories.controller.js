(function () {
    'use strict';

    angular.module("MenuApp")
        .controller("CategoriesController", CategoriesController);


    CategoriesController.injector = ["items"];
    function CategoriesController(items) {
        var controller = this;
        controller.items = items;
    }
})();