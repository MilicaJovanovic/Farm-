var app = angular.module('Farma', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'index.html'
	})
	.when('/index', {
		controller: 'indexController',
		templateUrl: 'index.html'
	});
}]);
