angular
.module('app')
.component('homeComponent', {
  templateUrl: 'app/components/home/home.html',
  controller: homeController

});
function homeController($state) {
  var self = this;
  self.search = function () {
    console.log(self.TxtSearch);
    if (self.TxtSearch) {
      $state.go('products', {txt: self.TxtSearch});
    }
    else {
      alert('Please provide a Text inside a search box');
    }
  };
}
