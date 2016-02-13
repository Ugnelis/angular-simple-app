"use strict";

angular.module('app')
    .factory('Auth', ['$q', '$http', 'SERVER',
        function ($q, $http, SERVER) {

            var identity = undefined;
            var authenticated = false;

            return {
                checkSession: function () {
                    return authenticated;
                },
                identity: function (force) {
                    var deferred = $q.defer();

                    if (force === true) identity = undefined;

                    // check and see if we have retrieved the identity data from the server. if we have, reuse it by immediately resolving
                    if (angular.isDefined(identity)) {
                        deferred.resolve(identity);

                        return deferred.promise;
                    }

                    $http.get(SERVER + '/profile', {ignoreErrors: true})
                        .success(function (data) {
                            identity = data;
                            authenticated = true;
                            deferred.resolve(identity);
                        })
                        .error(function () {
                            identity = null;
                            authenticated = false;
                            deferred.resolve(identity);
                        });
                },
                getAccessLevel: function () {
                    return identity.permissions;
                },
                hasAccess: function (role) {
                    for (var index = 0; index < identity.permissions.length; ++index)
                        if (identity.permissions[index].name == role)
                            return true;
                    return false;
                }
            };
        }]
    );
