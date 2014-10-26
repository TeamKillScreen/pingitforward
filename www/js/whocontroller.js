angular.module('starter.controllers')
.controller('WhoCtrl', function($scope, $firebase) {

	$scope.loadPartners = function (partnerType) {
		$scope.searchType = partnerType;

		console.log($scope.searchType);

		var firebaseRef = new Firebase("https://pif.firebaseio.com/partners/");
	    // create an AngularFire reference to the data
	    var sync = $firebase(firebaseRef);
	    // download the data into a local object
	    var partnerRecords = sync.$asObject();

	    partnerRecords.$loaded()
	    				.then(function () {
	    						$scope.partnersList = partnerRecords;
	    						console.log(partnerRecords);
	    						});
	    					};
	});