(function(){
  'use strict';
  angular
  .module('appRoutes', ['angularCSS', 'oc.lazyLoad', 'ui.router'])
  .config(configuration);

  configuration.$inject = ['$stateProvider','$urlRouterProvider'];

  function configuration($stateProvider,$urlRouterProvider){
    $stateProvider

    .state('home',{
      url : '/', //ruta del url del estado
      templateUrl : 'components/home/home.view.html',//vista que se va a cargar para este estado
      // El resolve sirve para  cargar el controlador junto con la vista
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('components/home/home.controller.js')
        }]
      },
      controller: 'homeCtrl',
      controllerAs:'vm'
    })


    $urlRouterProvider.otherwise('/');
  }
  })();
