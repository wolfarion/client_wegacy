'use strict';

angular.module('wegacy', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
			.when('/main', {template: 'views/main.html', controller: MainCtrl})
			.when('/homepage', {template: 'views/homepage.html', controller: HomepageCtrl})
			.when('/signIn', {template: 'views/signIn.html', controller: SignInCtrl})
			.otherwise({redirectTo: '/main'});
  },
]);