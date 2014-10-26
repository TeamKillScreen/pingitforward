angular.module("starter.controllers")
.controller("PaymentCtrl", function ($scope, $rootScope, $timeout, $state, $ionicLoading, $ionicPopup, $firebase) {
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

    var saveTransaction = function () {
        var transFirebase = new Firebase("https://pif.firebaseio.com/transactions");

        var transaction = {};
        transaction.amount = 0;
        transaction.partner = "11e2d3d9-cd1c-4a5c-9444-4358e4676046"; //Barnabus
        transaction.user = "048b3369-6047-4184-8af3-129101bd8fa5"; //Teamkillscreen

        if($rootScope.what.what === "Clothes")
        {
            transaction.amount = 10;
        }
        else if ($rootScope.what.what === "Shelter")
        {
            transaction.amount = 20;
        }
        else if ($rootScope.what.what === "Food")
        {
            transaction.amount = 5;
        }

        transFirebase.push(transaction);
    };

    var fakePingitApi = function () {
        $ionicLoading.show({
            template: 'Giving...'
        });

        $timeout(function () {
            $ionicLoading.hide();
            saveTransaction();
            showThankyouMessage();
        }, 2000);
    };

    $scope.pingit = function () {
        if ($rootScope.what.what === "Food") {
            launchPingitApp();
        } else {
            fakePingitApi();
        }
    };

    $scope.goHome = function () {
        $state.go("^.home");
    };
});
