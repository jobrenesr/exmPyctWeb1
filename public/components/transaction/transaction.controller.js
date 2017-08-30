(function(){
  angular
  .module('myApp')
  .controller('propCtrl', propCtrl);

  propCtrl.$inject = ['$scope', '$location', '$mdDialog', 'imageService', 'playerService','propertiesService'];

    function propCtrl($scope, $location, $mdDialog, imageService, playerService, propertiesService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var vm = this; //binding del controlador con el html, solo en el controlador

      vm.buyProp = {};
      vm.buyProperty = false;

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        vm.players = playerService.getPlayers();
        console.log(vm.players);
        vm.properties = propertiesService.getProperties();
      }init();

      vm.getInfo = function(pProperty) {
        console.log(pProperty.namePro);
        vm.buyProperty = true;
        vm.buyProp.nameProp = pProperty.name;
        vm.buyProp.idProp = pProperty.id;
        vm.buyProp.priceProp = pProperty.price;
      };

      vm.buy = function(pInfo) {
        var moneyUpdate = 0;
        var bError = false;
        for (var i = 0; i < vm.players.length; i++) {
          if (vm.players[i].id == pInfo.idPlayer) {
            for (var j = 0; j < vm.properties.length; j++) {
              if (vm.players[i].money >= pInfo.priceProp && vm.properties[j].id == pInfo.idProp) {
                moneyUpdate = vm.players[i].money - pInfo.priceProp;
                vm.players[i].money = moneyUpdate;
                playerService.updatePlayer(vm.players[i]);
                vm.properties[j].ownedby = pInfo.idPlayer;
                propertiesService.updateProperty(vm.properties[j]);
                bError =  true;
                vm.showBuyAlert();
              }
            }
          }
        }
        if (bError === false) {
          vm.showBuyErrorAlert();
        }
        clean();
        vm.buyProperty = false;
        init();
      };

      function clean() {
        vm.buyProp = '';
      }

      // Función para mensaje de registro de evento satisfactorio
      vm.showBuyAlert = function() {
        $mdDialog.show(
          $mdDialog.alert()
          .parent(angular.element(document.querySelector('#popupContainer')))
          .clickOutsideToClose(true)
          .title('¡Compra exitosa!')
          .textContent('¡La propiedad se encuentra ahora bajo su nombre!')
          .ariaLabel()
          .ok('¡Gracias!')
          .targetEvent()
          );
      };

     // Función para mensaje de registro de evento satisfactorio
     vm.showBuyErrorAlert = function() {
      $mdDialog.show(
        $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('¡Fondos insuficientes!')
        .textContent('¡El valor de la propiedad sobrepasa la capacidad de pago!')
        .ariaLabel()
        .ok('¡Gracias!')
        .targetEvent()
        );
    };

  }

     //se establece un objeto de angular normal

   })();
