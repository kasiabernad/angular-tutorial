angular.module('tutorialApp')
  .controller('ProductListWithScopeController', ['$scope', 'ProductService', function ProductListWithScopeController($scope, ProductService) {
    $scope.products = ProductService.getProducts();
}]);
