'use strict';

/**
 * @ngdoc function
 * @name primoTestApp.controller:LoginCtrlCtrl
 * @description
 * # LoginCtrlCtrl
 * Controller of the primoTestApp
 */
angular.module('primoTestApp')
  .controller('LoginCtrl', function ($scope) {
  	var vm = this;
  	vm.users = [
  	{
  		name: 'pippo',
  		password: 'poi'
  	},
  	{
  		name: 'pluto',
  		password: 'pai'
  	},
  	{
  		name: 'minni',
  		password: 'pei'
  	},
  	{
  		name: 'mickey',
  		password: 'pui'
  	}

  	];
  });

