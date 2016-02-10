'use strict';

angular.module('app')
    .controller('ProfileController', ['$scope', '$http', 'SERVER', function ($scope, $http, SERVER) {
        this.loginAction = function () {
            $http.get(SERVER + '/profile').success(function (data) {
                console.log(data);
            });
        };
        this.loginAction();
    }]);
