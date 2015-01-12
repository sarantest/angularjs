'use strict';

var AngularSpringApp = {};

var App = angular.module('AngularCourseApp', ['AngularSpringApp.filters', 'AngularSpringApp.services', 'AngularSpringApp.directives', 'ngRoute']);

// Declare app level module which depends on filters, and services
App.config(['$routeProvider', function ($routeProvider) {
	console.log("Config Route Provider");
	$routeProvider.when('/cars', {
        templateUrl: 'cars/layout',
        controller: CarController
    });

	$routeProvider.when('/trains', {
        templateUrl: 'trains/layout',
        controller: TrainController
    });
    
    $routeProvider.when('/railwaystations', {
        templateUrl: 'railwaystations/layout',
        controller: RailwayStationController
    });
    
    $routeProvider.when('/class1', {
        templateUrl: 'class1/layout',
        controller: Class1Controller
    });
    
    $routeProvider.when('/class2', {
        templateUrl: 'class2/layout',
        controller: Class2Controller
    });
    
    $routeProvider.when('/class3', {
        templateUrl: 'class3/layout',
        controller: Class3Controller
    });
    
    $routeProvider.when('/class4', {
        templateUrl: 'class4/layout',
        controller: Class4Controller
    });
    
    $routeProvider.when('/class5', {
        templateUrl: 'class5/layout',
        controller: Class5Controller
    });
    
    $routeProvider.when('/class6', {
        templateUrl: 'class6/layout',
        controller: Class6Controller
    });
    
    $routeProvider.otherwise({redirectTo: '/class6'});
}]);

App.config(['$httpProvider', function($httpProvider) {
    console.log("Config Http Provider");
	$httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
	}
]);
