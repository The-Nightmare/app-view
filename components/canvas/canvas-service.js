(function(){
  angular
    .module('nightmare.canvas.canvas-service', [])
    .service('canvasService', canvasService);
    canvasService.$inject = ['$http', '$location','$q', 'loginService'];
    function canvasService($http, $location, $q, loginService){
      var user = {};
      var deferred = $q.defer();
      return {
     getScore: getScore
      };
      function getScore(){
        $http({
          method: 'get',

          headers: {
            Authorization: 'Bearer ' + loginService.getToken()
          },

          url: 'http://localhost:3000/api'

        }).then(function successCallback(response) {
          // console.log(response.data.score);
           deferred.resolve(response.data.score);
        }, function errorCallback(err) {
          deferred.reject(err);
        });
          return deferred.promise;
      }



  }
})();
