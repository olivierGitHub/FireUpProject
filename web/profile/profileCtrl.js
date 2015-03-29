/**
 * Created by oliver on 11/03/15.
 */

/* global angular */
/*global console*/
angular.module('profileApp', [])

    .filter("asDate", function () {
        'use strict';
        return function (input) {
            return new Date(input);
        };
    })

    .constant("maxLengthProfile", {
        "fieldFirstname":3,
        "fieldLastname":5,
        "fieldHobbies":6,
        "fieldSearchInformation":7
    })

    .controller('profileController', ['$scope', '$http', 'maxLengthProfile', function($scope, $http, maxLengthProfile){
        'use strict';

        $http.get('./profile/countries.json')
            .success(function(data){
                $scope.countries = data;
            });

        $scope.maxLengthFirstname = maxLengthProfile.fieldFirstname;
        $scope.maxLengthLastname = maxLengthProfile.fieldLastname;
        $scope.maxLengthHobbies = maxLengthProfile.fieldHobbies;
        $scope.maxLengthSearchInformation = maxLengthProfile.fieldSearchInformation;

        $scope.classFirstname = "styleInput inputSize";
        $scope.classLastname = "styleInput inputSize";
        $scope.classBirthday = "styleInput inputSize";
        $scope.classHobbies = "styleInput inputSize";
        $scope.classOccupation = "styleInput selectSize";
        $scope.classCountry = "styleInput selectSize";
        $scope.classSearchInformation = "styleInput";
        $scope.classSubmitProfile = "submitProfileError";

        $scope.isFormValidProfile = false;

        $scope.checkFormProfile = function(){
        if($scope.firstnameProfile.length < maxLengthProfile.fieldFirstname+1 && $scope.firstnameProfile !== undefined &&
            $scope.lastnameProfile.length < maxLengthProfile.fieldLastname+1 && $scope.lastnameProfile !== undefined &&
            $scope.hobbiesProfile.length < maxLengthProfile.fieldHobbies+1 && $scope.hobbiesProfile !== undefined &&
            $scope.searchInformationProfile.length < maxLengthProfile.fieldSearchInformation+1 && $scope.searchInformationProfile !== undefined ){
                $scope.isFormValidProfile = true;
                $scope.classSubmitProfile = "submitProfile";
        }else{
                $scope.isFormValidProfile = false;
                $scope.classSubmitProfile = "submitProfileError";
            }
        };

        $scope.checkLengthFirstname = function(){
            if($scope.firstnameProfile.length < maxLengthProfile.fieldFirstname+1){
                $scope.classFirstname = "styleInput inputSize";
            }else{
                $scope.classFirstname = "styleInputError inputSize";
            }
        };

        $scope.checkLengthLastname = function(){
            if($scope.lastnameProfile.length < maxLengthProfile.fieldLastname+1){
                $scope.classLastname = "styleInput inputSize";
            }else{
                $scope.classLastname = "styleInputError inputSize";
            }
        };

        $scope.checkLengthHobbies = function(){
            if($scope.hobbiesProfile.length < maxLengthProfile.fieldHobbies+1){
                $scope.classHobbies = "styleInput inputSize";
            }else{
                $scope.classHobbies = "styleInputError inputSize";
            }
        };

        $scope.checkLengthSearchInformation = function(){
            if($scope.searchInformationProfile.length < maxLengthProfile.fieldSearchInformation+1){
                $scope.classSearchInformation = "styleInput";
            }else{
                $scope.classSearchInformation = "styleInputError";
            }
        };


    }]);
