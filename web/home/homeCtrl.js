/**
 * Created by oliver on 11/03/15.
 */

/*global angular*/
/*global console*/

angular.module('homeApp',[])

    .controller('homeController', ['$scope', '$rootScope', 'searchService', function($scope, $rootScope, searchService){
        'use strict';
        $scope.list = $rootScope.listResults;

        searchService.searchAll();

        $scope.$on('search', function(event,searchParams){
            searchService.searchAll(searchParams);
        });

        $scope.$on('searchVideos', function(event,searchParams){
            searchService.searchSelected(searchParams);
        });

    }])
    .service('searchService', function($http, $rootScope){
        'use strict';
        function readAll(searchParams){
            $http({
                method: 'POST',
                url:"http://localhost:8080/FireUpProject/rest/video/display",
                params:{searchParams:searchParams}
            })
                .success(function(data){
                    console.log("read All success");
                    $rootScope.listResultsVideo = data;
                })
                .error(function(){
                    console.log("read All failed");
                });
        }

        function readSelected(searchParams){
            $http({
                method: 'POST',
                url:"http://localhost:8080/FireUpProject/rest/video/displaySelected",
                params:{searchParams:searchParams}
            })
                .success(function(data){
                    console.log("read Selected success");
                    $rootScope.listResultsVideo = data;
                })
                .error(function(){
                    console.log("read Selected failed");
                });
        }

        return{
            searchAll:function(searchParams){
                readAll(searchParams);
            },
            searchSelected:function(searchParams){
                readSelected(searchParams);
            }
        };
    });