'use strict';

angular.module('app', [
        'ngAnimate',
        'ngSanitize',
        'ngResource',
        'angular-jwt',
        'angular-loading-bar',
        'angular-storage',
        'ui.bootstrap',
        'permission',
        'ui.router'
    ])
    .run(
        ['$rootScope', '$state', '$stateParams', 'cfpLoadingBar', 'PermissionStore', 'Auth', 'APP_ROLES',
            function ($rootScope, $state, $stateParams, cfpLoadingBar, PermissionStore, Auth, APP_ROLES) {

                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;

                $rootScope.$on('$stateChangeStart',
                    function (event, toState, toParams, fromState, fromParams) {
                        cfpLoadingBar.start();
                    });

                $rootScope.$on('$stateChangeSuccess',
                    function (event, toState, toParams, fromState, fromParams) {
                        cfpLoadingBar.complete();
                        console.log(Auth);
                    });

                // Permissions
                PermissionStore.definePermission('anonymous', function (stateParams) {
                    return !Auth.checkSession();
                });

                PermissionStore.definePermission('user', function (stateParams) {
                    return Auth.hasAccess(APP_ROLES.USER);
                });
            }]
    )
    .config(
        ['$httpProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider', 'jwtInterceptorProvider',
            function ($httpProvider, $stateProvider, $urlRouterProvider, $locationProvider, jwtInterceptorProvider) {

                // Enabling CORS
                $httpProvider.defaults.useXDomain = true;
                delete $httpProvider.defaults.headers.common['X-Requested-With'];

                // JWT Token handling
                jwtInterceptorProvider.authHeader = 'X-AUTH-TOKEN';
                jwtInterceptorProvider.authPrefix = '';
                jwtInterceptorProvider.tokenGetter = function (store) {
                    return store.get('jwt');
                };
                $httpProvider.interceptors.push('jwtInterceptor');

                // Default URL
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

                // Pretty URL
                //$locationProvider.html5Mode(true);
            }]
    );
