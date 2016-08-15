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
    console.log(userName,password);
    $http({
      method: 'post',
      params: {
        userName: userName,
        password: password
      },

      url: 'http://localhost:8080/auth/signup'
    }).then(function successCallback(response) {
        console.log('win', response);
        loginService.loginUser(userName, password);
      }, function errorCallback(response) {
        console.log('HEY THIS ISNT WORKING');
      });

    }
  }
})();
