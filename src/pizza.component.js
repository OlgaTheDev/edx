(function () {
'use strict';

angular.module('pizzaApp').component('pizzaBuilder', {
  templateUrl: 'src/pizza-builder.html',
  bindings: {
    searchText: '<',
    items: '<',
    newItemAdded: '<',
    selectedItems: '<',
    onAddItem: '&',
    newItemAdded: '<',
    onCloseMessage: '&'
  }
});

})();
