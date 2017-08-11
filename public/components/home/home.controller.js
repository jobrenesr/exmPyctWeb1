(function(){
  angular
    .module('myApp')
    .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$scope', '$location'];

    function homeCtrl($scope, $location){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var vm = this; //binding del controlador con el html, solo en el controlador

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute

       }init();




    }



})();
