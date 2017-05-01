(function() {
  'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com')
    .directive('foundItems', FoundItems);

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var ctrl = this;
    ctrl.found = [];
    ctrl.searchTerm = "";
    ctrl.search = function() {
      ctrl.found = [];
      if (ctrl.searchTerm.length == 0) return;
      MenuSearchService.getMatchedMenuItems(ctrl.searchTerm)
        .then(function(response) {
          ctrl.found = response;
        })
        .catch(function(error) {
          console.log("Something went wrong!");
        });
    };
    ctrl.removeFoundItem = function(index) {
      ctrl.found.splice(index, 1);
    };
  }

  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;
    service.getMatchedMenuItems = function(searchTerm) {
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      })
        .then(function(result) {
          // process result and only keep items that match
          var foundItems = [];
          for (var i = 0; i < result.data.menu_items.length; i++) {
            if (result.data.menu_items[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
              foundItems.push(result.data.menu_items[i]);
            }
          }
          // return processed items
          return foundItems;
        });
     };
  }

  FoundItems.$inject = [];
  function FoundItems() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<',
        onRemove: '&'
      }
    };
    return ddo;
  }
})();
