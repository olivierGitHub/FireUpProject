/**
 * Created by oliver on 11/03/15.
 */

/* global angular */
angular.module('profileApp', [])

    .controller('profileController', ['$scope', function($scope){
        'use strict';
        $scope.birthDate = '2013-07-23';
        $scope.dateOptions = {};
    }])
    .directive('customDatepicker',function($compile,$timeout){
        'use strict';
        return {
            replace:true,
            templateUrl:'custom-datepicker.html',
            scope: {
                ngModel: '=',
                dateOptions: '@',
                dateDisabled: '@',
                opened: '=',
                min: '@',
                max: '@',
                popup: '@',
                options: '@',
                name: '@',
                id: '@'
            },
            link: function($scope, $element, $attrs, $controller){

            }
        };
    });
