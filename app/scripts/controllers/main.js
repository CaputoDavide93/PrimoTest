'use strict';

/**
 * @ngdoc function
 * @name primoTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the primoTestApp
 */
angular.module('primoTestApp')
  .controller('MainCtrl', function ($scope, $sce) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Jasmine',
      'Bower',
      'Grunt'
    ];

    $scope.StampaPari=function(indice){
    	if(indice%2==0){
    		console.log("elemento pari");
    	}
    };

    $scope.isEven=function(indice){
		var con= indice%2==0;
		return (con);
    };


    $scope.greyEven=function(indice){
      if(indice%2==0){
        return ( {'background-color': 'grey'});
      }
      else{
        return ({'background-color': 'yellow'});
      }
    };

    $scope.serveColor=function(elemento){
        if(elemento=='testo'){
            return ( {'background-color': 'grey'});
        } else if(elemento=='bottone'){
            return ({'background-color': 'yellow'});
        }
    };


      $scope.greyClassEven=function(indice){
      if(indice%2==0){
        return ( "grigio");
      }
      else{
        return ("giallo");
      }
    };




//$scope.bottoneHtml=$sce.trustAsHtml('<button ng-style="serveColor(\'bottone\')">INFO</button>');

   // var ogg={
   //  /  prop1: 'ciao',
   //    prop2: 3
   //  };


   //  ogg.funione=function(){

   //  };
    


  });
