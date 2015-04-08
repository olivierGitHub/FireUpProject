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
        searchService.searchAllWebsites();
        searchService.searchAllSocialNetworks();

        $scope.$on('search', function(event,searchParams){
            searchService.searchAll(searchParams);
        });
        $scope.$on('searchVideos', function(event,searchParams){
            searchService.searchSelected(searchParams);
        });

        $scope.$on('searchAllWebsites', function(event,searchParams){
            searchService.searchAllWebsites(searchParams);
        });
        $scope.$on('searchSelectedWebsites', function(event,searchParams){
            searchService.searchSelectedWebsites(searchParams);
        });

        $scope.$on('searchAllSocialNetworks', function(event,searchParams){
            searchService.searchAllSocialNetworks(searchParams);
        });
        $scope.$on('searchSelectedSocialNetworks', function(event,searchParams){
            searchService.searchSelectedSocialNetworks(searchParams);
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

        function readAllWebsites(searchParams){
            $http({
                method: 'POST',
                url:"http://localhost:8080/FireUpProject/rest/website/display",
                params:{searchParams:searchParams}
            })
                .success(function(data){
                    console.log("read All Website success");
                    $rootScope.listResultsWebsite = data;
                })
                .error(function(){
                    console.log("read All Website failed");
                });
        }

        function readSelectedWebsites(searchParams){
            $http({
                method: 'POST',
                url:"http://localhost:8080/FireUpProject/rest/website/displaySelected",
                params:{searchParams:searchParams}
            })
                .success(function(data){
                    console.log("read Selected Websites success");
                    $rootScope.listResultsWebsite = data;
                })
                .error(function(){
                    console.log("read Selected Websites failed");
                });
        }


        function readAllSocialNetworks(searchParams){
            $http({
                method: 'POST',
                url:"http://localhost:8080/FireUpProject/rest/socialnetwork/display",
                params:{searchParams:searchParams}
            })
                .success(function(data){
                    console.log("read All SocialNetworks success");
                    $rootScope.listResultsSocialNetwork = data;
                })
                .error(function(){
                    console.log("read All SocialNetworks failed");
                });
        }

        function readSelectedSocialNetworks(searchParams){
            $http({
                method: 'POST',
                url:"http://localhost:8080/FireUpProject/rest/socialnetwork/displaySelected",
                params:{searchParams:searchParams}
            })
                .success(function(data){
                    console.log("read Selected SocialNetwork success");
                    $rootScope.listResultsSocialNetwork = data;
                })
                .error(function(){
                    console.log("read Selected SocialNetwork failed");
                });
        }


        return{
            searchAll:function(searchParams){
                readAll(searchParams);
            },
            searchSelected:function(searchParams){
                readSelected(searchParams);
            },

            searchAllWebsites:function(searchParams){
                readAllWebsites(searchParams);
            },
            searchSelectedWebsites:function(searchParams){
                readSelectedWebsites(searchParams);
            },
            searchAllSocialNetworks:function(searchParams){
                readAllSocialNetworks(searchParams);
            },
            searchSelectedSocialNetworks:function(searchParams){
                readSelectedSocialNetworks(searchParams);
            }
        };
    });