angular.module("starter.controllers")
.controller("PaymentCtrl", function ($scope, $rootScope, $timeout, $state, $ionicLoading, $ionicPopup, $stateParams) {
    $scope.selectedPartner = $stateParams.name;

    var launchPingitApp = function () {
        document.location = "pingit://00/07985222260";
    };

    var showThankyouMessage = function () {
        var popup = $ionicPopup.alert({
            title: "Thanks",
            template: "You're awesome!"
        }).then(function () {
            $state.go("app.social");
        });
    };

    var fakePingitApi = function () {
        $ionicLoading.show({
            template: 'Giving...'
        });

        $timeout(function () {
            $ionicLoading.hide();
            showThankyouMessage();
        }, 2000);
    };

    $scope.pingit = function () {
        if ($rootScope.what === "Clothes") {
            fakePingitApi();
        } else {
            launchPingitApp();
        }
    };

    $scope.goHome = function () {
        $state.go("^.home");
    };
});
