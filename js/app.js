(function(){
  angular.module('nightmare', [
    'ui.materialize',
    'ui.router',
    'nightmare.login',
    'nightmare.canvas',
    'nightmare.signup'
  ])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/templates/home.html',
    })
    .state('dashboard', {
      url : '/dashboard',
      templateUrl : '/templates/dashboard.html',
      controller : 'nightmareController'
    });
      $locationProvider.html5Mode(true);
  });

})();
