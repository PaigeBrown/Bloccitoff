(function() {
    function HomeCtrl($scope, Task) {
      this.tasks = Task.tasks;
      this.oldTime = new Date() - 864e5
      $scope.update = function(task){
        Task.addTask(task);
      };

      // this.clickedCheckbox = function(task) {
      //   Task.completeTask(task);
      //   alert('Task is marked completed')
      //
      // };
    }


    angular
        .module('bloccitoff')
        .controller('HomeCtrl', ['$scope', 'Task', HomeCtrl]);
})();
