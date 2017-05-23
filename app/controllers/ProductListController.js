angular.module('tutorialApp')
  .controller('ProductListController', ['$scope', 'ProductFactory', function ProductListController($scope, ProductFactory) {
    var ctr = this;
    ctr.productsList = ProductFactory.getProducts();
}]);
