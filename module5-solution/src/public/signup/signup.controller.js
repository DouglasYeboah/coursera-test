(function () {
  "use strict";

  angular.module('public')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService', 'UserService'];
  function SignUpController(MenuService, UserService) {
    var $ctrl = this;
    $ctrl.menuInvalid = false;
    $ctrl.saved = false;
    $ctrl.completed = false;
    $ctrl.user = UserService.getUser();

    $ctrl.submit = function () {
      MenuService.getMenuItem($ctrl.user.menuNumber)
        .then(function(response) {
          $ctrl.user.menuInvalid = false;
          UserService.setUser($ctrl.user);
          $ctrl.saved = true;
        })
        .catch(function(error) {
          $ctrl.user.menuInvalid = true;
        });
      $ctrl.completed = true;
    };

    $ctrl.getUser = function() {
      return UserService.getUser();
    };
  }


})();
