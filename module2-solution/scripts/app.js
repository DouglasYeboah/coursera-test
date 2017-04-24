(function(){
  'use strict';
  angular.module("ShoppingListCheckOff", [])
        .controller("ToBuyController", ToBuyController)
        .controller("AlreadyBoughtController", AlreadyBoughtController)
        .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

        ToBuyController.$inject=['ShoppingListCheckOffService'];
        AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];

        function ToBuyController(ShoppingListCheckOffService){
          var buy=this;
          buy.items = ShoppingListCheckOffService.availableItems();

          buy.buyItem=function(itemIndex, itemName, itemQantity){
            ShoppingListCheckOffService.buyItem(itemIndex, itemName, itemQantity);
          }

        };

        function AlreadyBoughtController(ShoppingListCheckOffService){
          var bought =this;

          bought.items=ShoppingListCheckOffService.bougtItems();

          bought.removeBougtItems = function(itemIndex, itemName, itemQantity){
            ShoppingListCheckOffService.removeBougtItems(itemIndex, itemName, itemQantity);
          }

        };

        function ShoppingListCheckOffService(){
          var service=this;
          var itemsToBuy = [
            {
              name:"soaps",
              quantity:"4 bars"
            },
            {
              name:"milk",
              quantity:"2 tins"
            },
            {
              name:"bread",
              quantity:"5 loaves"
            },
            {
              name:"coca-cola",
              quantity:"6 bottles"
            },
            {
              name:"fantas",
              quantity:"4 bottles"
            },
            {
              name:"pizzas",
              quantity:"2 plates"
            },
            {
              name:"strawberies",
              quantity:"5 bunches"
            },
            {
              name:"pears",
              quantity:"6"
            }
          ];
          var itemsBought = [];
          service.availableItems = function(){
            return itemsToBuy;
          };
          service.bougtItems = function(){
            return itemsBought;
          };
          service.removeBougtItems = function(itemIndex, itemName, itemQantity){
            var removedItem = {
                        name: itemName,
                        quantity: itemQantity
                      };
            itemsBought.splice(itemIndex, 1);
            itemsToBuy.push(removedItem);
          };
          service.buyItem = function(itemIndex, itemName, itemQantity){
            var removedItem = {
                        name: itemName,
                        quantity: itemQantity
                      };
            itemsToBuy.splice(itemIndex, 1);
            itemsBought.push(removedItem);
          };


        };

})();

// var message = "apple, orange, mango, pear, pawpaw";
// console.log(message.split(',').length);
