(function() {
    function ExpiredCtrl(Task) {
      this.tasks = Task.tasks;
      this.oldTime = new Date() - 864e5

      this.clickedCheckbox = function(task) {
            Task.completeTask(task);
      };
    }

    angular
        .module('bloccitoff')
        .controller('ExpiredCtrl', ['Task', ExpiredCtrl]);
})();
