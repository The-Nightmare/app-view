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
  });

})();
// var highScore = 300;
// var userName = "alex";
// function setHighScore(userName, highScore){
// $.post( "http://localhost:3000/auth/", {
//   userName: userName,
//   highScore: highScore
// })
// .done(function(data) {
//     console.log(data );
//   })
//   .fail(function(err) {
//    console.log(err );
//  });
//
// }
// setHighScore(userName, highScore);

 // Application.ExternalCall ("setHighScore", playerscore ); in unity on game over add this in
