'use strict';

angular.module('app', ['ngAnimate', 'ui.router', 'angular-loading-bar'])
    .run(
        ['$rootScope', '$state', '$stateParams', 'cfpLoadingBar', function ($rootScope, $state, $stateParams, cfpLoadingBar) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;

            $rootScope.$on('$stateChangeStart',
                function (event, toState, toParams, fromState, fromParams) {
                    cfpLoadingBar.start();
                });

            $rootScope.$on('$stateChangeSuccess',
                function (event, toState, toParams, fromState, fromParams) {
                    cfpLoadingBar.complete();
                });
        }]
    )
    .config(
        ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider
                .otherwise('/');

            $stateProvider.state('site', {
                abstract: true,
                views: {
                    'navbar@': {
                        templateUrl: 'app/layouts/navbar/navbar.html',
                        controller: 'NavbarController as navbar'
                    },
                    'footer@': {
                        templateUrl: 'app/layouts/footer/footer.html',
                        controller: 'FooterController as footer'
                    }
                }
            });
        }]
    );
