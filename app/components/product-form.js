function ProductFormController($location) {
  var Formctr = this;

  Formctr.create = function(form) {
    if (form.$valid){
      Formctr.onCreate({ product: Formctr.product });
      Formctr.reset()
      form.$setPristine();
      form.$setUntouched();
      $location.path('/products');
    }
  };

   Formctr.reset = function() {
     Formctr.product = {}
   };
 }

angular.module('tutorialApp')
  .component('productForm', {
    templateUrl: 'templates/product_form.html',
    controller: ProductFormController,
    controllerAs: 'Formctr',
    bindings: {
      product: '<',
      onCreate: '&',
    }
});
