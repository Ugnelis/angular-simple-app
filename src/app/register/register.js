'use strict';

angular.module('app')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('register', {
                parent: 'site',
                url: '/register',
                permissions: {
                    only: ['anonymous']
                },
                views: {
                    'content@': {
                        templateUrl: 'app/register/register.html',
                        controller: 'RegisterController as register'
                    }
                }
            });
    }]);
