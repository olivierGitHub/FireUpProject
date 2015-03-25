/**
 * Created by oliver on 11/03/15.
 */

/*global angular*/
/*global console*/

angular.module('menuApp',[])
    .controller('menuController',['$scope','menuService', function($scope, menuService){
        'use strict';
        $scope.listResults = [];

        $scope.searchResults = function(){
            menuService.searchSelected($scope.searchParams);
        };
    }])

    .service('menuService', function($http, $rootScope){
        'use strict';
        function readSelected(searchParams){
            $http({
                method: 'POST',
                url:'',
                params:{searchParams:searchParams}
            })
                .success(function(data){
                    console.log("search success");
                    $rootScope.listResults = data;
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