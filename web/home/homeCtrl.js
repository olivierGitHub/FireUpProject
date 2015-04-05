/**
 * Created by oliver on 11/03/15.
 */

/*global angular*/

angular.module('homeApp',[])

    .controller('homeController', ['$scope', '$rootScope', function($scope, $rootScope){
        'use strict';
        $scope.list = $rootScope.listResults;


    }]);