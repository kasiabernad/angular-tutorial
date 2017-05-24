function ManageProductController($scope) {
  var Managectr = this;

  Managectr.delete = function() {
    Managectr.onDelete({ product: Managectr.product });
  };
}

angular.module('tutorialApp').component('manageProduct', {
  templateUrl: 'templates/manage_product.html',
  controller: ManageProductController,
  controllerAs: 'Managectr',
  bindings: {
    product: '<',
    onDelete: '&'
  }
});
