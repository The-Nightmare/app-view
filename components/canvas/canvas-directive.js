(function(){
  angular
  .module('nightmare.canvas.canvas-directive', [])
  .directive('gameCanvas', gameCanvas);
  function gameCanvas(){
    var directive = {
      restrict: "E",
      templateUrl: 'templates/canvas.html',
      scope: {},
      controller: canvasController,
      controllerAs: 'canvasController'
    };
    return directive;
  }
  canvasController.$inject = ['canvasService'];
  function canvasController(canvasService){
    }
})();
