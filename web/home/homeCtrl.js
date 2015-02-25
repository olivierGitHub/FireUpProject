/*global angular*/

angular.module('home', [])
    .controller('homeController', ['$scope', '$state', function ($scope, $state) {
        'use strict';

        $scope.goToFullLogUpPage = function(){
            $state.go('signup');
        };
        /* $scope.signUp = function () {
         homeService.LogIn($scope.usernameSignUp, $scope.passwordSignUp);
         };*/
    }]);

   /* .service('homeService', function ($scope, $http) {
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