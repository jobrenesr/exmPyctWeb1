(function(){
  angular
    .module('myApp')
    .controller('historyCtrl', historyCtrl);

    historyCtrl.$inject = ['$scope', '$location', '$mdDialog', 'imageService', 'playerService','propertiesService'];

    function historyCtrl($scope, $location, $mdDialog, imageService, playerService, propertiesService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var vm = this; //binding del controlador con el html, solo en el controlador

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        vm.players = playerService.getPlayers();
        console.log(vm.players);
        vm.properties = propertiesService.getProperties();
       }init();

       // vm.logIn = function(event){
       //  event.preventDefault();
       //  $location.path('/login');
       // }



    }

     //se establece un objeto de angular normal

})();
