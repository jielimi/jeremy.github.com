'use strict';

// Declare app level module which depends on views, and components
require('./bower-components/angular/angular.min');
require('./bower-components/angular-route/angular-route.min');
require('./views/view1/view1');
require('./views/view2/view2');
require('./components/version/version');

angular.module('myApp', [
	'ngRoute',
	'myApp.view1',
	'myApp.view2',
	'myApp.version'
])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise({
		redirectTo: '/view1'
	});
}]);