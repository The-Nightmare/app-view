//LIST-CONTROLLER.JS SET UP 1
(function(){
  //LIST-CONTROLLER.JS SET UP 2
  angular
    .module('nightmare')
    //LIST-CONTROLLER.JS SET UP 3
    .controller('nightmareController', nightmareController);
    //LIST-CONTROLLER.JS SET UP 4
  nightmareController.$inject = ['$scope', 'canvasService', '$q'];
  //LIST-CONTROLLER.JS SET UP 5
    function nightmareController($scope, canvasService, $q) {

      _init = function(){
        _getHighScore();
      };

      function _getHighScore(){
        canvasService.getScore().then(function(response){
          $scope.scoreData = response;
        });
      }
      function _orderByMax(){

      }
      _init();
    }
})();
