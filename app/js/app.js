'use strict';

var twitterCloneApp = angular.module('twitterCloneApp', ['ngResource', 'ngRoute', 'firebase'])
	.config(function($locationProvider) {
		$locationProvider.html5Mode(true);
	})
	.controller('TwitterCloneCtrl', function($scope, $firebaseObject, $firebaseArray) {

	// firebase refs to get users
	var usersRef = firebase.database().ref().child('users');
	$scope.rawUsers = $firebaseArray(usersRef);

	// handler for when a selected user changes
	$scope.handleUserChange = function() {
		console.log('user with id: ' + $scope.selectedUser.id + ' has been selected!');
	};
});