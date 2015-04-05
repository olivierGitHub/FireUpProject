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
            $rootScope.$broadcast('search',$scope.searchParams);
            console.log("broadcast results OK");
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