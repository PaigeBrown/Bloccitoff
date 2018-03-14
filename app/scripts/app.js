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
             })

             .state('expired', {
               url: '/expired',
               controller: 'ExpiredCtrl as expired',
               templateUrl: '/templates/expired.html',
             });
     }

     angular
          .module('bloccitoff', ['ui.router', 'firebase'])
          .config(config);
 })();
