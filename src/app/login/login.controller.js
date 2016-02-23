'use strict';

angular.module('app')
    .controller('LoginController', ['$scope', '$http', '$state', 'auth',
        function ($scope, $http, $state, auth) {
            this.loginAction = function () {
                this.user.hours = 1;
                auth.login(this.user);
            };
        }]);
