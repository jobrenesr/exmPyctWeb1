(function(){
  'use strict';
  angular
  .module('myApp')
  .service('playerService', playerService);

  function playerService($http){
    var players = [
];
    var publicAPI = {
      setPlayers : _setPlayers,
      getPlayers : _getPlayers,
      updatePlayer : _updatePlayer
      //updateCompetition : _updateCompetition
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones

    // Función para guardar eventos
    function _setPlayers(pPlayer){
      // var playersList = _getPlayers();
      // playersList.push(pPlayer);
      // localStorage.setItem('lsPlayersList', JSON.stringify(playersList));
      // console.log(playersList);
      return $http.post('http://localhost:3000/api/set_players',pPlayer);
    }

    // Función para extraer información de eventos
    function _getPlayers(){
      // var playersList = JSON.parse(localStorage.getItem('lsPlayersList'));
      // if(playersList == null){
      //   playersList = players;
      // }
      // return playersList;
      return $http.get('http://localhost:3000/api/get_all_players');
    }

    // Función para guardar modificación de información de eventos
    function _updatePlayer(pModMoney){
      // var playersList = _getPlayers();
      // for(var i = 0; i < playersList.length; i++){
      //   if(playersList[i].id == pModMoney.id){
      //     playersList[i] = pModMoney;
      //   }
      // }
      return $http.put('http://localhost:3000/api/update_player',pModMoney);
    }

  }

})();
