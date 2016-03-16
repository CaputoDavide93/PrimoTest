'use strict';

/**
 * @ngdoc overview
 * @name primoTestApp
 * @description
 * # primoTestApp
 *
 * Main module of the application.
 */
angular
  .module('primoTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.tmpl.html',
        controller: 'LoginCtrl',
        controllerAs: 'loginctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
