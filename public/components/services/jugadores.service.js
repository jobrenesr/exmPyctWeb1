(function(){
  'use strict';
  angular
  .module('myApp')
  .service('jugadorService', jugadorService);

  var publicAPI = {
    setJugadores : _setJugadores,
    getJugadores : _getJugadores,
    updateJugador : _updateJugador
  };
  return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones


  function _setJugadores(pJugador){
    var listaJugadores = _getJugadores();
    listaJugadores.push(pJugador);
    localStorage.setItem('lsListaJugadores', JSON.stringify(listaJugadores));
    console.log(listaJugadores);
  }


  function _getJugadores(){
    var listaJugadores = JSON.parse(localStorage.getItem('lsListaJugadores'));
    if(listaJugadores == null){
      listaJugadores = jugadores;
    }
    return listaJugadores;
  }


  function _updateJugador(pDinero){
    var listaJugadores = _getPlayers();
    for(var i = 0; i < listaJugadores.length; i++){
      if(listaJugadores[i].id == pDinero.id){
        listaJugadores[i] = pDinero;
      }
    }
    console.log(listaJugadores);
    localStorage.setItem('lsListaJugadores', JSON.stringify(listaJugadores));
  }

  function jugadorService(){
    var listaJugadores = [
  {
    id: 001,
    name:'Goku',
    alias: 'Kokkun',
    money: 1500,
    photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535279/goku_cqc9tb.png'
  },
  {
    id: 002,
    name:'Piccolo',
    alias: 'PikOREO',
    money: 1500,
  photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535276/piccolo_ksxdec.png'
  },
  {
    id: 003,
    name:'Logan',
    alias: 'Lovezno',
    money: 1500,
    photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535284/lobezno_o1vs9g.png'
  },
  {

    id: 004,
    name:'Bomberman',
    alias: 'Don Pepe y los Globos',
    money: 1500,
    photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535282/donpepe_x9hksw.png'
  }
]
}

})();
