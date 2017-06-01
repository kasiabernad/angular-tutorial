angular.module('tutorialApp')
  .controller('ProductListController', ['$scope', '$routeParams', 'ProductFactory', function ProductListController($scope, $routeParams, ProductFactory) {
    var ctr = this;
    ctr.productsList = ProductFactory.getProducts();
    ctr.productItem = ProductFactory.getProduct($routeParams['productId']);

    ctr.deleteProduct = function(product) {
      ProductFactory.deleteProduct(product);
    };

    ctr.createProduct = function(product) {
      ProductFactory.createProduct(product);
    };

    ctr.updateProduct = function(product, values) {
      ProductFactory.updateProduct(product, values);
    };
}]);
