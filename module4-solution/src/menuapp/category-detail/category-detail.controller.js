(function () {
    'use strict';

    angular.module("MenuApp")
        .controller("CategoryDetailController", CategoryDetailController);


    CategoryDetailController.injector = ["items"];
    function CategoryDetailController(items) {
        var controller = this;
        controller.items = items;
    }
})();