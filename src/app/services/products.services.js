console.log(12);

 angular
 .module('app').service('productService', function ($http) {
   return ($http({
        method: 'GET',
         url: '/productsList.json'
       }
       ));
 });
angular
.module('app').service('productdetailsService', function ($http) {
    console.log(32);
  return ($http({
        method: 'GET',
        url: 'http://localhost:8000/products'
      }
      ));
});
