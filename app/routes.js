'use strict';

angular.module('tutorialApp')
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/search');

    $stateProvider
      .state('productList', {
        url: '/productList',
        templateUrl: 'views/index.html'
      })
      .state('search', {
        url: '/search',
        templateUrl: 'views/search_view.html'
      })

});
