function EditableProductController($location) {
  var Editctrl = this;
  Editctrl.editMode = false;

  Editctrl.handleModeChange = function() {
    if (Editctrl.editMode) {
      $location.path('/products');
    }
    Editctrl.editMode = !Editctrl.editMode;
  };
}

angular.module('tutorialApp').component('editableProduct', {
  templateUrl: 'templates/editable_product.html',
  controller: EditableProductController,
  controllerAs: 'Editctrl',
  bindings: {
    product: '<',
  }
});
