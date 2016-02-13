'use strict';

angular.module('app')
    .controller('LoginController', ['$scope', '$http', '$state', 'store', 'Auth', 'SERVER',
        function ($scope, $http, $state, store, Auth, SERVER) {
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
                    Auth.identity();
                    $state.go('home', null, {reload: true});
                }).error(function (data) {
                    console.log("error");
                });
            };
        }]);
