angular
.module('app')
.component('productDetails', {
  templateUrl: 'app/components/productDetails/productDetails.html',
  controller: productDetailsController

});
function productDetailsController (productdetailsService, $scope) {
    productdetailsService.then(function successCallback(response) {
        $scope.productsdetails = response.data;
        console.log(response);
      }, function errorCallback(response) {
        $scope.productsdetails = response.statusText;
      }
      );
  };
  
