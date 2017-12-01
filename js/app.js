var app = angular.module('Farma', ['ngRoute', 'ui.bootstrap']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		redirectTo: '/index'
	})
	.when('/index', {
		controller: 'indexController',
		templateUrl: 'views/index.html'
	})
	.when('/home', {
		controller: 'homeController',
		templateUrl: 'views/home.html'
	});
}]);
