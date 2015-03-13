/*global angular*/
/*global console*/
/*global alert*/

angular.module('loginApp', [])
    .controller('loginController', ['$scope', '$state', 'loginService', function ($scope, $state, loginService) {
        'use strict';

        $scope.signup = function(){
            if (($scope.usernameSignup === undefined) ||
                ($scope.passwordSignup === undefined) ||
                ($scope.passwordSignup !== $scope.passwordSignup2)){
                    console.log('user/password for SIGNUP not correct');
            }else{
                loginService.signup($scope.usernameSignup,$scope.passwordSignup);
            }
        };

        $scope.signin = function(){
            if (($scope.usernameSignin === undefined) ||
                ($scope.passwordSignin === undefined)){
                console.log('user/password for SIGNIN not correct');
            }else{
                loginService.signin($scope.usernameSignin,$scope.passwordSignin);
            }
        };

    }])

    .service('loginService', function($http, $rootScope,$state){
        'use strict';

        function signup(usernameSignup, passwordSignup){
            $http({
               method:'POST',
                url:'http://localhost:8080/FireUpProject/rest/user/signup',
                params:{usernameSignup:usernameSignup, passwordSignup:passwordSignup}
            })
            .success(function(data){
               console.log("SIGNUP request success");
               $state.go('menu.home');
            })
            .error(function(){
               console.log("SIGNUP request failed");
            });
        }

        function signin(usernameSignin, passwordSignin){
            $http({
               method:'POST',
               url: 'http://localhost:8080/FireUpProject/rest/user/signin',
               params:{usernameSignin:usernameSignin, passwordSignin:passwordSignin}
            })
                .success(function(data){
                    console.log('SIGNIN request success');
                    if (data.username === undefined || data.password === undefined){
                        console.log("USER NOT FOUND");
                    }else{
                        $state.go('menu.home');
                    }
                })
                .error(function(){
                    console.log('SIGNIN request failed');
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

