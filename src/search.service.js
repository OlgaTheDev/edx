(function (){
  'use strict';

  angular.module('pizzaApp').service('SearchService', SearchService);

  function SearchService() {
    var service = this;

    var availableToppings = ['Cheese', 'Pepperoni', 'Bacon', 'Pineapple', 'Sausage', 'Ham', 'Chicken', 'Mushrooms', 'Onion', 'Olives', 'Green Peppers']

    //Simulation of receiving the array from external source;
    service.getItems = function() {
      return availableToppings;
    };

    // service.
  };

})();
