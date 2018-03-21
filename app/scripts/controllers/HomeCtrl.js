(function() {
    function HomeCtrl(Task) {
      this.tasks = Task.tasks;
      this.oldTime = new Date() - 864e5

      this.update = function(task){
        Task.addTask(task);
      };

      this.clickedCheckbox = function(task) {
            Task.completeTask(task);
      };
    }


    angular
        .module('bloccitoff')
        .controller('HomeCtrl', ['Task', HomeCtrl]);
})();
