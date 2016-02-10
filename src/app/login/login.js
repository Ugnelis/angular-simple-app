'use strict';

angular.module('app')
    .config(['$httpProvider', '$stateProvider', function ($httpProvider, $stateProvider) {
        $stateProvider
            .state('login', {
                parent: 'site',
                url: '/login',
                views: {
                    'content@': {
                        templateUrl: 'app/login/login.html',
                        controller: 'LoginController as login'
                    }
                }
            });
    }]);
