angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
})

.controller('WhatListsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Clothes', id: "Clothes" },
    { title: 'Shelter', id: "Shelter" },
    { title: 'Food', id: "Food" }
  ];
})

.controller('WhatCtrl', function($scope, $stateParams) {
  console.log($stateParams)

  $scope.what = $stateParams.playlistId;
});
