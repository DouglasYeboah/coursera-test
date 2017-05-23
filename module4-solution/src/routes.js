(function () {
    'use strict';

    angular.module("MenuApp")
        .config(RouteConfig);


    RouteConfig.injector = ["$stateProvider", "$urlRouterProvider"];
    function RouteConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider

            .state("home", {
                url: "/",
                templateUrl: "src/menuapp/templates/home.template.html"
            })


            .state("categories", {
                url: "/categories",
                templateUrl: "src/menuapp/categories/categories.template.html",
                controller: "CategoriesController as categoryCtrl",
                resolve: {
                    items: ["MenuDataService", function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })

            .state("categories.category-detail", {
                url: "/{categoryId}",
                templateUrl: "src/menuapp/category-detail/category-detail.template.html",
                controller: "CategoryDetailController as categoryDetailCtrl",
                resolve: {
                    items: ["MenuDataService", "$stateParams", function (MenuDataService, $stateParams) {
                        return MenuDataService.getItemsForCategory($stateParams.categoryId);
                    }]
                }
            });
    }

})
();