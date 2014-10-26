angular.module('starter.controllers')
.controller('WhatListsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Clothes', id: "Clothes" },
    { title: 'Shelter', id: "Shelter" },
    { title: 'Food', id: "Food" }
  ];
});