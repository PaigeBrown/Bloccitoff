(function() {
    function HomeCtrl($scope, Task) {
      this.tasks = Task.tasks;
      this.oldTime = new Date() - 864e5

      $scope.update = function(task){
        Task.addTask(task);
      };

      $scope.completion = function(task){
        Task.completeTask(task);
      };

      this.clickedCheckbox = function(task) {
            alert('Task is marked completed, and is now in the Expired Tasks list')

      };
    }


    angular
        .module('bloccitoff')
        .controller('HomeCtrl', ['$scope', 'Task', HomeCtrl]);
})();
