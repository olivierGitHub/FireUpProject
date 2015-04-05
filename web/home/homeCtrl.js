/**
 * Created by oliver on 11/03/15.
 */

/*global angular*/
/*global console*/

angular.module('homeApp',[])

    .controller('homeController', ['$scope', '$rootScope', 'searchService', function($scope, $rootScope, searchService){
        'use strict';
        $scope.list = $rootScope.listResults;

        searchService.searchSelected();

        $scope.$on('search', function(event,searchParams){
            searchService.searchSelected(searchParams);
        });

    }])
    .service('searchService', function($http, $rootScope){
        'use strict';
        function readSelected(searchParams){
            $http({
                method: 'POST',
                url:"http://localhost:8080/FireUpProject/rest/video/display",
                params:{searchParams:searchParams}
            })
                .success(function(data){
                    console.log("search success");
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