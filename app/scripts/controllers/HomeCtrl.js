(function() {
    function HomeCtrl($scope, Task) {
      this.tasks = Task.tasks;
      this.oldTime = new Date() - 864e5

    //   this.taskStatus = function (task) {
    //   Task.completeTask(task);
    // }
      $scope.update = function(task){
        Task.addTask(task);
      };

      this.clickedCheckbox = function(task) {
        Task.completeTask(task)
        // task.completed = true;
          task.$save(task)
        alert('Task is marked completed')

      };
    }


    angular
        .module('bloccitoff')
        .controller('HomeCtrl', ['$scope', 'Task', HomeCtrl]);
})();
