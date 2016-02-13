'use strict';

angular.module('app')
    .config(['$httpProvider', '$stateProvider', function ($httpProvider, $stateProvider) {
        $stateProvider
            .state('login', {
                parent: 'site',
                url: '/login',
                permissions: {
                    only: ['anonymous']
                },
                views: {
                    'content@': {
                        templateUrl: 'app/login/login.html',
                        controller: 'LoginController as login'
                    }
                }
            });
    }]);
