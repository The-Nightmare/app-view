(function(){
  angular
    .module('nightmare.canvas.canvas-service', [])
    .service('canvasService', canvasService);
    canvasService.$inject = ['$http', '$location','$q', 'loginService'];
    function canvasService($http, $location, $q, loginService){
      var user = {};
      var deferred = $q.defer();
      return {
     getScore: getScore,
     getUserData: getUserData
      };
      function getScore(){
        $http({
          method: 'get',

          headers: {
            Authorization: 'Bearer ' + loginService.getToken()
          },

          // url: 'http://localhost:3000/api'
          url: 'https://nightmare-server.herokuapp.com/api' + loginService.getUserId();

        }).then(function successCallback(response) {
           deferred.resolve(response.data.score);
        }, function errorCallback(err) {
          deferred.reject(err);
        });
          return deferred.promise;
      }
      function getUserData(){
        var deferred = $q.defer();

        $http({
          method: 'get',

          headers: {
            Authorization: 'Bearer ' + loginService.getToken()
          },
          // url: 'http://localhost:3000/api/' + loginService.getUserId()
          url: 'https://nightmare-server.herokuapp.com/api' + loginService.getUserId()
        }).then(function successCallback(response) {
          deferred.resolve(response.data);
        }, function errorCallback(err) {
          deferred.reject(err);
        });
          return deferred.promise;
        }

  }
})();
