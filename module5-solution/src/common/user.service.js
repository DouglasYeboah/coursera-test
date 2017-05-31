(function () {
  "use strict";

  angular.module('common')
    .service('UserService', UserService);

  // UserService.$inject = ['$http', 'ApiPath'];
  function UserService() {
    var service = this;
    var user = {};

    service.setUser = function(value) {
      user = JSON.parse(JSON.stringify(value));
    };

    service.getUser = function() {
      return JSON.parse(JSON.stringify(user));
    };

  }

})();
