// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova', 'firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "templates/home.html",
          controller: 'AppCtrl'
        }
      }
    })

    .state('app.whatlist', {
      url: "/what",
      views: {
        'menuContent' :{
          templateUrl: "templates/whatlist.html",
          controller: 'WhatListsCtrl'
        }
      }
    })

    .state('app.report', {
      url: "/report",
      views: {
        'menuContent' :{
          templateUrl: "templates/report.html",
          controller: 'ReportCtrl'
        }
      }
    })

    .state('app.who', {
      url: "/who",
      views: {
        'menuContent' :{
          templateUrl: "templates/who.html",
          controller: 'WhoCtrl'
        }
      }
    })

    .state('app.payment', {
      url: "/payment/:name",
      views: {
        'menuContent' :{
          templateUrl: "templates/payment.html",
          controller: 'PaymentCtrl'
        }
      }
    })

    .state('app.social', {
      url: "/social",
      views: {
        'menuContent' :{
          templateUrl: "templates/social.html",
          controller: 'SocialCtrl'
        }
      }
    })

    .state('app.what', {
      url: "/what/:whatId",
      views: {
        'menuContent' :{
          templateUrl: "templates/what.html",
          controller: 'WhatCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});

