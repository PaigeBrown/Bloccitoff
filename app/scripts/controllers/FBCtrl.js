 var app = angular.module("bloccitoff", ["firebase"]);

 app.controller("FBCtrl", function($scope, $firebaseObject) {
  var ref = firebase.database().ref();
  // download the data into a local object
  $scope.data = $firebaseObject(ref);
  // putting a console.log here won't work, see below
});

app.controller("FBCtrl", ["$scope", "$firebaseArray",
  function($scope, $firebaseArray) {
    var ref = firebase.database().ref();
    var list = $firebaseArray(ref);

    // add an item
    list.$add({ foo: "bar" }).then(...);

    // remove an item
    list.$remove(2).then(...);

    // make the list available in the DOM
    $scope.list = list;
  }
]);
<!-- HTML -->
<li ng-repeat="item in list | filter:name">{{ item | json }}</li>
