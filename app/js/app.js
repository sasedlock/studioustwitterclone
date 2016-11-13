'use strict';

var twitterCloneApp = angular.module('twitterCloneApp', ['ngResource', 'ngRoute', 'firebase'])
	.config(function($locationProvider) {
		$locationProvider.html5Mode(true);
	})
	.controller('TwitterCloneCtrl', function($scope, $firebaseObject, $firebaseArray) {

	// firebase refs
	var timelineRef,
		timelineHandler,
		userHandler,
		usersRef = firebase.database().ref().child('users');
	
	$scope.rawUsers = $firebaseArray(usersRef);

	// handler for when a selected user changes
	$scope.handleUserChange = function() {
		var userKey = $scope.selectedUser.$id;
		console.log('user with id: ' + userKey + ' has been selected!');
	
		if (userKey) {
			timelineRef = firebase.database().ref().child('userObjects').child('timeline').child(userKey);
			
			$scope.selectedUserTimeline = $firebaseArray(timelineRef);			
		}
	};
});