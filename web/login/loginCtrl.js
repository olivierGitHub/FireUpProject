/*global angular*/
/*global console*/

angular.module('loginApp', [])
    .controller('loginController', ['$scope', '$state', 'loginService', function ($scope, $state, loginService) {
        'use strict';

        $scope.signup = function(){
            if (($scope.usernameSignup === null) ||
                ($scope.passwordSignup === null) ||
                ($scope.passwordSignup !== $scope.passwordSignup2)){
                    console.log('passwords must be equals');
            }else{
                loginService.signup($scope.usernameSignup,$scope.passwordSignup);
            }
        };

        $scope.signin = function(){
            loginService.signin($scope.usernameSignin,$scope.passwordSignin);


        };

    }])

    .service('loginService', function($http, $rootScope,$state){
        'use strict';

        function signup(usernameSignup, passwordSignup){
            $http({
               method:'GET',
                url:'http://localhost:8080/FireUpProject/rest/user/signup',
                params:{usernameSignup:usernameSignup, passwordSignup:passwordSignup}
            })
            .success(function(data){
               console.log("SIGNUP success");
                    if (data.id_user >1){
                        $state.go('menu.home');
                    }

                })
            .error(function(){
               console.log("SIGNUP failed");
            });
        }

        function signin(usernameSignin, passwordSignin){
            $http({
               method:'GET',
               url: 'http://localhost:8080/FireUpProject/rest/user/signin',
               params:{usernameSignin:usernameSignin, passwordSignin:passwordSignin}
            })
                .success(function(data){
                    console.log('SIGNIN success');
                    $state.go('menu.home');
                })
                .error(function(){
                    console.log('SIGNIN failed');
                });
        }

        return {
          signup : function(usernameSignup,passwordSignup){
              signup(usernameSignup,passwordSignup);
          },
          signin : function(usernameSignin, passwordSignin) {
              signin(usernameSignin,passwordSignin);
          }
        };

    });

