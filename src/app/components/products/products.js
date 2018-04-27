angular
.module('app')
.component('products', {
  templateUrl: 'app/components/products/products.html',
  controller: productsController
});
function productsController(productService, $stateParams, $scope) {
  console.log(1);
  console.log(123);
  $scope.term = $stateParams.txt;
  console.log($scope.term);
  console.log($stateParams.txt);
  productService.then(function (response) {
    $scope.productsList = response.data;
    console.log(response);
    $scope.printme = $scope.findResult($scope.productsList);
    console.log($scope.printme);
   }, function (response) {
     $scope.productsList = response.statusText;
   });
    $scope.findResult = function (products) {
      console.log(products);
      var result = products.filter(filterArray);
      return result;
    };
    function filterArray(product) {
      $scope.smallterm = $scope.term.toUpperCase();
      return (product.product.includes($scope.smallterm));
    }
}

