(function(){
  angular.module('nightmare', [
    'ui.materialize',
    'ui.router',
    'nightmare.login',
    'nightmare.signup'
  ])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/templates/home.html',
    })
      $locationProvider.html5Mode(true);
  });

})();
