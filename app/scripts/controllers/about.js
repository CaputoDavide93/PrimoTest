'use strict';

/**
 * @ngdoc function
 * @name primoTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the primoTestApp
 */
angular.module('primoTestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
