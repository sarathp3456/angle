// describe('productsController' , function() {
//     beforeEach(module('app'));
//     var $controller;
//     beforeEach(inject(function(_$controller_){
//       $controller = _$controller_;
//     }));
//     describe('assigning value to variable by searching c', function(){
//         it('it should create $scope.smallterm when calling findResult(params)' , function(){
//             $scope.productsList = [ {"id": 3,"product": "Chair","price": "5000", "image" : "/app/images/chair_image.jpg" }]
//             var $scope = {};
//             var controller = $controller('productsController' , {$scope : $scope});
//             $scope.term='c';
//             expect($scope.smallterm).toBeUndefined();
//             $scope.findResult($scope.productsList);
//             expect($scope.smallterm).toBedefined();
//         });
//     });
// }
// );