angular.module('starter.controllers')
.controller('SocialCtrl', function($scope, $cordovaSocialSharing) {

	$scope.socialmessage = "I just helped support a charity! You should do the same too! #pingitforward ";

	var win = function()
	{
		$scope.message = "Thanks for sharing!"
	};

	var lose = function()
	{
		$scope.message = "Nick Nick There's Been An Error. Have you seen Looper?"
	};

	$scope.ShareOnTwitter = function()
	{
		$scope.message = "Working on it...."

		$cordovaSocialSharing
		.shareViaTwitter($scope.socialmessage/*, image, link*/)
		.then(function(result) {
    		win();
		}, function(err) {
		    // An error occured. Show a message to the user
		    lose();
		});
	};


	$scope.ShareOnFacebook = function()
	{
		$scope.message = "Working on it...."

		$cordovaSocialSharing
    .shareViaFacebook($scope.socialmessage/*, image, link*/)
    .then(function(result) {
      // Success! 
      win();
    }, function(err) {
      // An error occured. Show a message to the user
      lose();
    });
};

$scope.ShareOnSMS = function()
	{
		$scope.message = "Working on it...."

  // access multiple numbers in a string like: '0612345678,0687654321'
  $cordovaSocialSharing
    .shareViaSMS($scope.socialmessage/*, number*/)
    .then(function(result) {
      // Success! 
      win();
    }, function(err) {
      // An error occurred. Show a message to the user
      lose();
    });
};


$scope.ShareOnEmail = function()
	{
		$scope.message = "Working on it...."

  // TO, CC, BCC must be an array, Files can be either null, string or array
  $cordovaSocialSharing
    .shareViaEmail($scope.socialmessage/*, subject, toArr, bccArr, file*/)
    .then(function(result) {
      // Success! 
      win();
    }, function(err) {
      // An error occurred. Show a message to the user
      lose();
    });

};
});