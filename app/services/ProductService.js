angular.module('tutorialApp')
  .service('ProductService', function () {
    var products = [{
      id: 'cc919e21-ae5b-5e1f-d023-c40ee669520c',
      name: 'COBOL 101 vintage',
      description: 'Learn COBOL with this vintage programming book',
      price: 399,
    }]

    this.getProducts = function() {
      return products;
    }
  });
