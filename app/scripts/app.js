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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/uploadAV', {
        templateUrl: 'views/uploadAV.html',
        controller: 'AVCtrl',
        controllerAs: 'AVCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
