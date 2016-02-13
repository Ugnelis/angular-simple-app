'use strict';

angular.module('app')
    .controller('NavbarController', ['$scope', '$location', '$state', '$timeout', 'cfpLoadingBar',
        function ($scope, $location, $state, $timeout, cfpLoadingBar) {
        $scope.$state = $state;
    }]);
