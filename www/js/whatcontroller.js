angular.module('starter.controllers')
.controller('WhatCtrl', function($scope, $rootScope, $stateParams) {
  console.log($stateParams)

  $scope.what = $stateParams.whatId;

  $rootScope.what = {what: $stateParams.whatId};
  console.log($rootScope.what);
});