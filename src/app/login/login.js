'use strict';

angular.module('app')
    .config(['$stateProvider', function ($stateProvider) {
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
    }])
