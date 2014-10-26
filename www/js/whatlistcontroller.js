angular.module('starter.controllers')
.controller('WhatListsCtrl', function($scope, $rootScope) {
  $scope.playlists = [
    { title: 'Clothes', id: "Clothes" },
    { title: 'Shelter', id: "Shelter" },
    { title: 'Food', id: "Food" }
  ];

  if (!$rootScope.what) {
  	$rootScope.what = {};
  };
});