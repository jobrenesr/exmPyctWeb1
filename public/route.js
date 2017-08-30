(function() {
  'use strict';
  angular
    .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'angularCSS'])
    .config(configuration);

  configuration.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configuration($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('properties', {
        url: '/properties', //ruta del url del estado
        templateUrl: 'components/transaction/transaction.view.html', //vista que se va a cargar para este estado
        // El resolve sirve para  cargar el controlador junto con la vista
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('components/transaction/transaction.controller.js')
          }]
        },
        controller: 'propCtrl',
        controllerAs: 'vm'
      })

      .state('player', {
        url: '/regplayer', //ruta del url del estado
        templateUrl: 'components/jugadores/player.view.html', //vista que se va a cargar para este estado
        //El resolve sirve para  cargar el controlador junto con la vista

        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('components/jugadores/player.controller.js')
          }]
        },
        controller: 'playerCtrl',
        controllerAs: 'vm'
      })





      .state('home', {
        url: '/', //ruta del url del estado
        templateUrl: 'components/home/home.view.html', //vista que se va a cargar para este estado
        // El resolve sirve para  cargar el controlador junto con la vista
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('components/home/home.controller.js')
          }]
        },
        controller: 'homeCtrl',
        controllerAs: 'vm'
      })

      .state('history', {
        url: '/history', //ruta del url del estado
        templateUrl: 'components/history/history.view.html', //vista que se va a cargar para este estado
        // El resolve sirve para  cargar el controlador junto con la vista
        resolve: {
          load: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('components/history/history.controller.js')
          }]
        },
        controller: 'historyCtrl',
        controllerAs: 'vm'
      })


    $urlRouterProvider.otherwise('/');
  }
})();
