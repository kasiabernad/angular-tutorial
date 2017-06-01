'use strict';

angular.module('tutorialApp')
  .config(function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    
    $routeProvider.
        when('/products', {
          templateUrl: 'views/products.html'
        }).
        when('/products/new', {
          controller : "ProductListController",
          controllerAs: 'ctr',
          template: '<product-form on-create="ctr.createProduct(product)"></product-form>'
        }).
        when('/products/:productId', {
          controller : "ProductListController",
          controllerAs: 'ctr',
          template: '<manage-product product="ctr.productItem" on-delete="ctr.deleteProduct(ctr.productItem)" on-update="ctr.updateProduct(ctr.productItem)"> </manage-product>'
        }).
        when('/products/:productId/edit', {
          controller : "ProductListController",
          controllerAs: 'ctr',
          template: '<editable-product product="ctr.productItem"> </editable-product>'
        }).
        when('/search', {
          templateUrl: 'views/search_view.html'
        }).
        otherwise('/search');
});
