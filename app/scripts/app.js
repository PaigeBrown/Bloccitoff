(function() {

  function config($locationProvider, $stateProvider, $urlRouterProvider) {
         $locationProvider
             .html5Mode({
                 enabled: true,
                 requireBase: false
              });

              $urlRouterProvider.otherwise('/');

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
