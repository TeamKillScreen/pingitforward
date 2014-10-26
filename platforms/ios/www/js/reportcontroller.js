angular.module('starter.controllers')
<<<<<<< HEAD
.controller('ReportCtrl', function($scope, $cordovaGeolocation) {

$scope.run = "no it did not";
$scope.geopoint = {};
$scope.geolocation = "";

	$scope.getLocation = function () {
		var win = function (position) {
			$scope.geopoint.latitude  = position.coords.latitude;
			$scope.geopoint.longitude = position.coords.longitude;

			$scope.geolocation = position.coords.latitude + ", " + position.coords.longitude
		};

		var fail = function (err) {
			$scope.message = "Failed to get location.";
		};

		$cordovaGeolocation
		.getCurrentPosition()
		.then(win, fail);

		$scope.run = "yes it did"
	};
=======
.controller('ReportCtrl', function($scope) {
  
>>>>>>> 116bedb1fbb3be85aa8a2f08c5c99c72e1b16ba5
});