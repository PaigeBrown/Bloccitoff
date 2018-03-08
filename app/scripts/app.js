(function() {

  function config($locationProvider, $stateProvider) {
         $locationProvider
             .html5Mode({
                 enabled: true,
                 requireBase: false
              });

         $stateProvider
             .state('home', {
                 url: '/',
                 controller: 'HomeCtrl as home',
                 templateUrl: '/templates/home.html'
             });
     }

     angular
          .module('bloccitoff', ['ui.router', 'firebase'])
          .config(config);
 })();

 var app = angular.module("bloccitoff", ["firebase"]);

 app.controller("FBCtrl", ["$scope", "$firebaseArray",
   function($scope, $firebaseArray) {
     var ref = firebase.database().ref();

       $scope.data = $firebaseObject(ref);
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

// Directly copied info below
//  var app = angular.module("sampleApp", ["firebase"]);
//
//  app.controller("SampleCtrl", function($scope, $firebaseObject) {
//   var ref = firebase.database().ref();
//   // download the data into a local object
//   $scope.data = $firebaseObject(ref);
//   // putting a console.log here won't work, see below
// });
//
// app.controller("MyCtrl", ["$scope", "$firebaseArray",
//   function($scope, $firebaseArray) {
//     var ref = firebase.database().ref();
//     var list = $firebaseArray(ref);
//
//     // add an item
//     list.$add({ foo: "bar" }).then(...);
//
//     // remove an item
//     list.$remove(2).then(...);
//
//     // make the list available in the DOM
//     $scope.list = list;
//   }
// ]);
// <!-- HTML -->
// <li ng-repeat="item in list | filter:name">{{ item | json }}</li>
