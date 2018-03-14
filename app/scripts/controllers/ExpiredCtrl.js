(function() {
    function ExpiredCtrl($scope, Task) {
      this.tasks = Task.tasks;
      this.oldTime = new Date() - 864e5
      $scope.update = function(task){


        };
      }

    angular
        .module('bloccitoff')
        .controller('ExpiredCtrl', ['$scope', 'Task', ExpiredCtrl]);
})();
