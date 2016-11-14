'use strict';

function MainCtrl($scope, $window) {
	$scope.countdown = 80;

	var me = $scope;
	var date = 146736000;

	var timer = function(date) {
		var s = date;
	    s = parseInt(s / 1000);
	    var h = parseInt(s / 3600);
	    s -= h * 3600;
	    var m = parseInt(s / 60);
	    s -= m * 60;
	    me.hours = (h < 10) ? '0' + h : h;
	    me.minutes = (m < 10) ? '0' + m : m;
	    me.seconds = (s < 10) ? '0' + s : s;
	    me.$apply();
	    setTimeout(timer, 2000, date - 1000);
	};

	timer(date);

	$scope.showHomepage = function() {
		$window.location.hash = '#/homepage';
	};

	$scope.showSignIn = function() {
		$window.location.hash = '#/signIn';
	};

	$scope.$on("$destroy", function () {
	  	clearTimeout(timer);
	});
}

function HomepageCtrl($scope, $window) {
	$scope.showHomepage = function() {
		$window.location.hash = '#/homepage';
	};
	$scope.items = [{
		author: "Rosamund Pike",
		date: "January 11, 2016",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		liked: 123,
		shared: 456,
		comments: 789
	}, {
		author: "Rosamund Pike",
		date: "January 11, 2016",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		liked: 123,
		shared: 456,
		comments: 789
	}, {
		author: "Rosamund Pike",
		date: "January 11, 2016",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		liked: 123,
		shared: 456,
		comments: 789
	}, {
		author: "Rosamund Pike",
		date: "January 11, 2016",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		liked: 123,
		shared: 456,
		comments: 789
	}, {
		author: "Rosamund Pike",
		date: "January 11, 2016",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		liked: 123,
		shared: 456,
		comments: 789
	}, {
		author: "Rosamund Pike",
		date: "January 11, 2016",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		liked: 123,
		shared: 456,
		comments: 789
	}, {
		author: "Rosamund Pike",
		date: "January 11, 2016",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		liked: 123,
		shared: 456,
		comments: 789
	}, {
		author: "Rosamund Pike",
		date: "January 11, 2016",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		liked: 123,
		shared: 456,
		comments: 789
	}];
}

function SignInCtrl($scope, $window) {
	$scope.showHomepage = function() {
		$window.location.hash = '#/homepage';
	};
}
