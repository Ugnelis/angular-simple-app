'use strict';

angular.module('app')
    .controller('LoginController', ['$scope', '$http', '$state', 'store', 'SERVER', function ($scope, $http, $state, store, SERVER) {
        //$scope.login = {};
        //$scope.loginError = false;

        this.loginAction = function () {
            this.user.hours = 1;
            console.log(this.user);
            $http({
                method: 'POST',
                url: SERVER + '/login',
                data: JSON.stringify(this.user),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).success(function (data) {
                store.set('jwt', data.token);
                //$state.go('admin.home');
                console.log(data.token);
            }).error(function (data) {
                console.log("error");
            });


        };

        /*$scope.closeAlert = function () {
            $scope.loginError = false;
        };*/

    }]);


/*pageModule.controller('loginCtrl', ['$scope', '$http', 'store', '$state', function ($scope, $http, server, store, $state) {

    $scope.login = {};
    $scope.loginError = false;

    $scope.loginAction = function () {
        $http({
            method: 'POST',
            url: SERVER + '/login',
            data: JSON.stringify($scope.login),
            headers: {
                'Content-Type': 'application/json'
            }
        }).success(function (data) {

            // todo, check if user is admin/mod
            store.set('jwt', data.token);
            $state.go('admin.home');
        }).error(function () {
            $scope.loginError = true;
        });
    };

    $scope.closeAlert = function () {
        $scope.loginError = false;
    };
}]);*/