(function () {
'use strict';

angular.module('pizzaApp').controller('PizzaController', PizzaController);

PizzaController.$inject = ['$scope', 'SearchService'];
function PizzaController($scope, SearchService){
  var pizzaCtrl = this;

  pizzaCtrl.searchText = '';
  pizzaCtrl.newItemAdded = false;
  pizzaCtrl.selectedItems = [];

  pizzaCtrl.items = SearchService.getItems();
  pizzaCtrl.addItem = function(item) {
    pizzaCtrl.selectedItems.push(item);
    pizzaCtrl.searchText = '';
    pizzaCtrl.newItemAdded = true;
  };
  pizzaCtrl.closeMessage = function(){
    pizzaCtrl.newItemAdded = false;
  };

}

})();
