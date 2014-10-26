angular.module('starter.controllers')
.controller('ReportCtrl', function($scope, $cordovaGeolocation, $ionicPopup, $state, $firebase) {

	$scope.geopoint = {};
	$scope.report = {};
	$scope.report.geolocation = "";
	$scope.report.content = "";

	$scope.getLocation = function () {
		var win = function (position) {
			$scope.geopoint.latitude  = position.coords.latitude;
			$scope.geopoint.longitude = position.coords.longitude;

			$scope.report.geolocation = position.coords.latitude + ", " + position.coords.longitude
		};

		var fail = function (err) {
			$scope.message = "Failed to get location.";
		};

		$cordovaGeolocation
		.getCurrentPosition()
		.then(win, fail);
	};

	$scope.submitReport = function() {

		var newReport = new Firebase("https://pif.firebaseio.com/reports/");

		newReport.push($scope.report);


		var popup = $ionicPopup.alert({
            title: "Thanks",
            template: "Report has been submitted"
        }).then(function () {
            $state.go("app.home");
        });
	};

	

});