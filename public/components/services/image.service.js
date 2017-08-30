(function(){
  angular
  .module('myApp')
  .service('imageService', imageService);

  function imageService($http){

    var cloudObj = {
      url:'https://api.cloudinary.com/v1_1/jobrenesr/image/upload',
      data:{
        upload_preset: 'ExamenPablo',
        tags:'EXP',
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
