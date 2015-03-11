/*global angular*/

angular.module('loginApp', [])
    .controller('loginController', ['$scope', '$state', function ($scope, $state) {
        'use strict';

        $scope.home = function(){
            $state.go('signup');
        };

        $scope.content = function(){
            $state.go('content');
        };

    }]);

   /* .service('loginService', function ($scope, $http) {
        'use strict';
        function requestLogInToServer(usernameLogIn, passwordLogIn) {
            $http({
                method: 'POST',
                url: '/rest/user/login',
                data: { usernameLogIn: usernameLogIn,
                    passwordLogIn: passwordLogIn }
            });
        }

        function requestSignUpToServer(usernameSignUp, passwordSignUp) {
            $http({
                method: 'POST',
                url: '/rest/user/create',
                data: { usernameSignUp: usernameSignUp,
                    passwordSignUp: passwordSignUp }
            });
        }

        return {
            SignUp: function (usernameSignUp, passwordSignUp) {
                requestSignUpToServer(usernameSignUp, passwordSignUp);
            },
            LogIn: function (usernameLogIn, passwordLogIn) {
                requestLogInToServer(usernameLogIn, passwordLogIn);
            }
        };
    });*/