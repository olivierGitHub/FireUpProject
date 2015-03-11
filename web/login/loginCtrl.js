/*global angular*/
/*global console*/

angular.module('loginApp', [])
    .controller('loginController', ['$scope', '$state', 'loginService', function ($scope, $state, loginService) {
        'use strict';

        $scope.signup = function(){
            if ($scope.passwordSignup !== $scope.passwordSignup2){
                console.log('passwords must be equals');
            }else{
                loginService.signup($scope.usernameSignup,$scope.passwordSignup);
            }
        };

        $scope.home = function(){
            $state.go('menu.home');
        };

        $scope.content = function(){
            $state.go('menu.content');
        };

    }])

    .service('loginService', function($http, $rootScope){
        'use strict';

        function signup(usernameSignup, passwordSignup){
            $http({
               method:'GET',
                url:'http://localhost:8080/FireUpProject/rest/calcul/hello',
                params:{usernameSignup:usernameSignup, passwordSignup:passwordSignup}
            })
            .success(function(data){
               console.log("signin success");
            })
            .error(function(){
               console.log("signin failed");
            });
        }

        return {
          signup : function(usernameSignup,passwordSignup){
              signup(usernameSignup,passwordSignup);
          }
        };

    });

