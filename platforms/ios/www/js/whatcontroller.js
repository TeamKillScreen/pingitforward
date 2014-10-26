angular.module('starter.controllers')
.controller('WhatCtrl', function($scope, $stateParams) {
  console.log($stateParams)

  $scope.what = $stateParams.whatId;
});