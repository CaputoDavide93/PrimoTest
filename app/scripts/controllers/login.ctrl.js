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
  		email: 'pippo',
  		password: 'poi'
  	},
  	{
  		email: 'pluto',
  		password: 'pai'
  	},
  	{
  		email: 'minni@m',
  		password: 'pei'
  	},
  	{
  		email: 'mickey',
  		password: 'pui'
  	}
  	];

      this.entra = function (email, password) {
     for(var i=0; i<= vm.users.length-1; i++){
          if(email === vm.users[i].email){
            window.alert("Benvenuto " + email);
            break;
          } 
     } 
      };
 

        this.registra=function (email, password) {
                this.users.push ( { email: email, password: password});
                console.log("--- Registrato Nuovo Utente ---");
                console.log("EMAIL:" + email);
                console.log("PASSWORD:" + password);
                console.log("----------------------------");
        }
})
