'use strict';

/**
 * @ngdoc overview
 * @name dashWebclientApp
 * @description
 * # dashWebclientApp
 *
 * Main module of the application.
 */
angular
  .module('dashWebclientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/uploadAV', {
        templateUrl: 'views/uploadAV.html',
        controller: 'AVCtrl',
        controllerAs: 'AVCtrl'
      })
      .when('/dash', {
        templateUrl: 'views/dash-player.html',
        controller: 'DASHCtrl',
        controllerAs: 'dash'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
