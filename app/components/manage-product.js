function ManageProductController($location) {
  var Managectr = this;

  Managectr.delete = function() {
    Managectr.onDelete({ product: Managectr.product });
    $location.path('/products');
  };
}

angular.module('tutorialApp').component('manageProduct', {
  templateUrl: 'templates/manage_product.html',
  controller: ManageProductController,
  controllerAs: 'Managectr',
  bindings: {
    product: '<',
    onDelete: '&',
  }
});
