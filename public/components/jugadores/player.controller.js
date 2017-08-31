(function(){
  angular
  .module('myApp')
  .controller('playerCtrl', playerCtrl);

  playerCtrl.$inject = ['$scope', '$location', '$mdDialog', 'imageService', 'playerService', 'Upload'];

    function playerCtrl($scope, $location, $mdDialog, imageService, playerService, Upload){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var vm = this; //binding del controlador con el html, solo en el controlador
      vm.cloudObj = imageService.getConfiguration();
      vm.players = {};
      loadTeachers();

      function loadTeachers(){
        playerService.getPlayers().then(function (response) {
          vm.players = response.data;

          });
          }


      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
      }init();

      vm.presavePlayer = function (pNewPlayer) {
        console.log(pNewPlayer);
        vm.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(vm.cloudObj)
        .success(function (data) {
          pNewPlayer.photo = data.url;
          createNewPlayer(pNewPlayer);
        });
      };

    // Función para guardar
    function createNewPlayer(pNewPlayer) {
      var bError = false;
      var newPlayer = pNewPlayer;

      if (vm.players.length == 0) {
        playerService.setPlayers(newPlayer);
        vm.showPlayerAlert();
        clean();
        init();
      } else {
        for (var i = 0; i < vm.players.length; i++) {
          if (newPlayer.id == vm.players[i].id) {
            bError = true;
          }
        }
        if (bError == false) {
          playerService.setPlayers(newPlayer);
          vm.showPlayerAlert();
          clean();
          init();
        } else {
          vm.showPlayerDuplicateAlert();
        }
      }
    }

    function clean() {
      vm.player = '';
    }

    // Función para mensaje de registro de evento satisfactorio
    vm.showPlayerAlert = function() {
      $mdDialog.show(
        $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('¡Registro exitoso!')
        .textContent('¡El jugador se registró correctamente!')
        .ariaLabel()
        .ok('Ok!')
        .targetEvent()
        );
    };

    // Función para mensaje de evento duplicado
    vm.showPlayerDuplicateAlert = function() {
      $mdDialog.show(
        $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('¡El jugador ya está registrado!')
        .textContent('Por favor intente con otro código')
        .ariaLabel()
        .ok('Ok!')
        .targetEvent()
        );
    };

  }

     //se establece un objeto de angular normal

   })();
