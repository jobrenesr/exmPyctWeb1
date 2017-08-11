(function(){
  angular
  .module('myApp')
  .service('imageService', imageService);

  function imageService($http){

    var cloudObj = {
      url:'https://api.cloudinary.com/v1_1/da3g464b2/image/upload',
      data:{
        upload_preset: 'examenPablo',
        tags:'EPW',
        context:'photo=test'
      }
    };

    var publicAPI = {
      getConfiguration : _getConfiguration
    }
    return publicAPI;

    function _getConfiguration(){
      return cloudObj;
    }

  }

})();
