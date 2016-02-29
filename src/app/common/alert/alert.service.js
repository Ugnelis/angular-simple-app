"use strict";

angular.module('app')
    .factory('alert', ['$rootScope',
        function ($rootScope) {
            var alert = {
                add: function (type, message) {
                    if (type == "danger")
                        $rootScope.alerts.push({type: "danger", msg: message});
                    else if (type == "warning")
                        $rootScope.alerts.push({type: "warning", msg: message});
                },
                close: function (index) {
                    $rootScope.alerts.splice(index, 1);
                }
            };
            return alert;
        }
    ]);
