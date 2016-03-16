'use strict';

/**
 * @ngdoc function
 * @name primoTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the primoTestApp
 */
angular.module('primoTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
