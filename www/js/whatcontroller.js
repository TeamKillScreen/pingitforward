angular.module('starter.controllers')
.controller('WhatCtrl', function($scope, $rootScope, $stateParams) {
  console.log($stateParams)

  $scope.what = $stateParams.whatId;

  $rootScope.what = {what: $stateParams.whatId};
  console.log($rootScope.what);

  var getViewModelFromWhat = function (what) {
        switch (what) {
            case "Food":
                return {
                    what: "Food",
                    icon: "ion-pizza",
                    coffees: [ 0, 1 ],
                    beers: [ 0, 1, 2 ],
                    mags: [ 0, 1, 2, 3 ],
                    narrative: "A gift of food is the equivalent of...",
                    minValue: 2,
                    maxValue: 4
                };

            case "Shelter":
                return {
                    what: "Shelter",
                    icon: "ion-home",
                    coffees: [0, 1, 2 ],
                    beers: [ 0, 1, 2 ],
                    mags: [ 0, 1, 2, 3 ],
                    narrative: "A gift of shelter is the equivalent of...",
                    minValue: 3,
                    maxValue: 5
             };

            default:
                return {
                    what: "Clothing",
                    icon: "ion-person-stalker",
                    coffees: [0, 1, 2, 3, 4, 5 ],
                    beers: [ 0, 1, 2 ],
                    mags: [ 0, 1, 2, 3 ],
                    narrative: "A gift of clothing is the equivalent of...",
                    minValue: 8,
                    maxValue: 8
                };
        }
	};

	$scope.vm = getViewModelFromWhat($rootScope.what);
});