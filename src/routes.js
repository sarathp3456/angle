angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    })
    .state('products', {
      url: '/products/:txt',
      component: 'products'
    })
    .state('productDetails', {
      url: '/productDetails',
      component: 'productDetails'
    });
  $urlRouterProvider.otherwise('/');
}
