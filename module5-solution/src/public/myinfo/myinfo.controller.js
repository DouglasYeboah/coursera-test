(function () {
  "use strict";

  angular.module('public')
    .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['MenuService', 'UserService'];
  function MyInfoController(MenuService, UserService) {
    var $ctrl = this;
    $ctrl.valid = !angular.equals(UserService.getUser(), {});
    if ($ctrl.valid) {
      $ctrl.user = UserService.getUser();
      MenuService.getMenuItem($ctrl.user.menuNumber)
        .then(function(response) {
          $ctrl.menuItem = response;
        });
    }
  }


})();
