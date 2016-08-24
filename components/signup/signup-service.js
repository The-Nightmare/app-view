(function(){
angular
  .module('nightmare.signup.signup-service', [])
  .service('signupService', signupService);
  signupService.$inject = ['$http', 'loginService'];

  function signupService($http, loginService) {
    return {
      createUser: createUser
    };
  function createUser(userName, password) {
    $http({
      method: 'post',
      params: {
        userName: userName,
        password: password
      },

      url: 'https://nightmare-server.herokuapp.com/auth/signup'
      // url: 'http://localhost:3000/auth/signup'
    }).then(function successCallback(response) {
        console.log('win', response);
        loginService.loginUser(userName, password);
      }, function errorCallback(err) {
        console.log('HEY THIS ISNT WORKING', err);
      });

    }
  }
})();
