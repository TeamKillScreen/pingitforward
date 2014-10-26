angular.module('starter.controllers')
.controller('WhoCtrl', function($scope, $firebase) {

	$scope.loadPartners = function (partnerType) {
		// retrieve list of partners from Firebase

		// set on ViewModel
		var firebaseRef = new Firebase("https://pif.firebaseio.com/partners/");
	    // create an AngularFire reference to the data
	    var sync = $firebase(firebaseRef);
	    // download the data into a local object
	    $scope.partnersList = sync.$asObject();
	};
});