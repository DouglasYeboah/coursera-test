(function(){
  'use strict';
  angular.module("LunchCheck", [])
        .controller("LunchCheckController", LunchCheckController);
        LunchCheckController.$inject = ['$scope'];

        function LunchCheckController ($scope){
          $scope.listOfItems = "";
          $scope.message="";

        $scope.checkLunch = function(){

            if ($scope.listOfItems.length==0) {
              $scope.message="Please enter data first";
            }else {
                  var numberOfItems = $scope.listOfItems.split(",").length;
                  if (numberOfItems<=3) {
                    $scope.message="Enjoy!";
                  }else if (numberOfItems>3) {
                    $scope.message="Too Much!";
                  }
              }
        };

  };

})();

// var message = "apple, orange, mango, pear, pawpaw";
// console.log(message.split(',').length);
