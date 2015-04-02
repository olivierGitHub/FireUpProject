/**
 * Created by oliver on 11/03/15.
 */

/*global angular*/
/*global console*/
/*global alert*/

angular.module('menuApp',[])
    .controller('menuController',['$scope', '$rootScope','$state', 'menuService', function($scope, $rootScope, $state, menuService){
        'use strict';
        $rootScope.listResultsVideo = [];

        $scope.searchResults = function(){
            menuService.searchSelected($scope.searchParams);
            $state.go('menu.home.display');
            console.log("hello");
        };

        $scope.essai = function(){
            alert("ESSAI");
        };

    }])

    .service('menuService', function($http, $rootScope){
        'use strict';
        function readSelected(searchParams){
            $http({
                method: 'POST',
                url:"http://localhost:8080/FireUpProject/rest/video/display",
                params:{searchParams:searchParams}
            })
                .success(function(data){
                    console.log("search success");
                    console.log(data.titleVideo);
                    $rootScope.listResultsVideo = data;
            })
                .error(function(){
                    console.log("search failed");
                });
        }

        return{
           searchSelected:function(searchParams){
               readSelected(searchParams);
           }
        };
    });