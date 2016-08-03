
    // create the module and name it scotchApp
    // also include ngRoute for all our routing needs
var scotchApp = angular.module('scotchApp', ['ngRoute']);

	//routes
	scotchApp.config(function($routeProvider) {
    	$routeProvider
     	//default route
        .when('/', {
            templateUrl : 'HTMLFiles/home.html',
            controller  : 'mainController'
        })
        	//home route
        .when('/home', {
            templateUrl : 'HTMLFiles/home.html',
            controller  : 'mainController'
        })

       		//development route
        .when('/dev', {
            templateUrl : 'HTMLFiles/dev.html',
            controller  : 'mainController'
        })

        	//education route
        .when('/education', {
            templateUrl : 'HTMLFiles/education.html',
            controller  : 'mainController'
        })

            //resume route
        .when('/resume', {
            templateUrl : 'HTMLFiles/resume.html',
            controller  : 'mainController'
        })

            //contact route
        .when('/contact', {
            templateUrl : 'HTMLFiles/contact.html',
            controller  : 'mainController'
        });
    });


    // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', function($scope) {

    });
