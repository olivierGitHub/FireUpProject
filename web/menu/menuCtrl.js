/**
 * Created by oliver on 11/03/15.
 */

/*global angular*/
/*global console*/
/*global alert*/

angular.module('menuApp',[])
    .controller('menuController',['$scope', '$rootScope','$state', function($scope, $rootScope, $state){
        'use strict';
        $rootScope.listResultsVideo = [];

        $scope.searchResults = function(){
            console.log($state.current.name);
            if ($state.current.name === "menu.home.display"){
                $rootScope.$broadcast('searchVideos',$scope.searchParams);
                console.log("broadcast results OK State  VIDEOS found");
            }else if ($state.current.name === "menu.home.displayResultsWebsites"){
                $rootScope.$broadcast('searchVideos',$scope.searchParams);
                console.log("broadcast results OK State  WEBSITES found");
            }else if ($state.current.name === "menu.home.displayResultsSocialNetworks"){
                $rootScope.$broadcast('searchVideos',$scope.searchParams);
                console.log("broadcast results OK State  SOCIAL NETWORKS found");
            }else {
                $rootScope.$broadcast('search',$scope.searchParams);
                $state.go("menu.home.display");
                console.log("state not found");
            }
        };

        $scope.essai = function(){
            alert("ESSAI");
        };

    }])

    .filter('trustAsResourceUrl', ['$sce', function($sce) {
        'use strict';
        return function(val) {
            return $sce.trustAsResourceUrl(val);
        };
    }]);