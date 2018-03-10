(function() {
    function HomeCtrl($scope, Task) {
      this.tasks = Task.tasks;

      $scope.update = function(task){
        Task.addTask(task);
      };
    }

    angular
        .module('bloccitoff')
        .controller('HomeCtrl', ['$scope', 'Task', HomeCtrl]);
})();
