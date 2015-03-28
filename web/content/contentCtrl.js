/**
 * Created by oliver on 11/03/15.
 */

/*global angular*/
/*global console*/
/*global alert*/

angular.module('contentApp',[])

    .controller('contentController', ['$scope', 'contentService', function($scope, contentService){
        'use strict';

        $scope.classTitleVideo = "contentInput inputStyleContent";
        $scope.classDescriptionVideo = "contentInput inputStyleContent";
        $scope.classLinkVideo = "contentInput inputStyleContent";
        $scope.classListTagsVideo = "contentInput inputStyleContent";
        $scope.classSubmitVideo = "submitContentError";
        $scope.isFormValidVideo = false;

        $scope.checkFormVideo = function(){
            if ($scope.titleVideo.length < 30 && $scope.titleVideo !== undefined &&
                $scope.descriptionVideo.length < 20 && $scope.descriptionVideo !== undefined &&
                $scope.linkVideo.length < 50 && $scope.linkVideo !== undefined &&
                $scope.listTagsVideo.length < 100 && $scope.listTagsVideo !== undefined){
                    $scope.classSubmitVideo = "submitContent";
                    $scope.isFormValidVideo = true;
            }else{
                $scope.isFormValidVideo = false;
                $scope.classSubmitVideo = "submitContentError";
            }
        };

        $scope.checkLengthTitleVideo = function(){
            if ($scope.titleVideo.length < 30){
                $scope.classTitleVideo = "contentInput inputStyleContent";
            }else{
                $scope.classTitleVideo = "contentInput inputStyleContentError";
            }
        };

        $scope.checkLengthDescriptionVideo = function(){
            if ($scope.descriptionVideo.length < 20){
                $scope.classDescriptionVideo = "contentInput inputStyleContent";
            }else{
                $scope.classDescriptionVideo = "contentInput inputStyleContentError";
            }
        };

        $scope.checkLengthLinkVideo = function(){
            if ($scope.linkVideo.length < 50){
                $scope.classLinkVideo = "contentInput inputStyleContent";
            }else{
                $scope.classLinkVideo = "contentInput inputStyleContentError";
            }
        };

        $scope.checkLengthListTagsVideo = function(){
            if ($scope.listTagsVideo.length < 100){
                $scope.classListTagsVideo = "contentInput inputStyleContent";
            }else{
                $scope.classListTagsVideo = "contentInput inputStyleContentError";
            }
        };

        $scope.validateVideo = function(){
            contentService.createVideo($scope.titleVideo,$scope.descriptionVideo,$scope.linkVideo,$scope.listTagsVideo);
            contentService.eraseInputValues($scope.titleVideo,$scope.descriptionVideo,$scope.linkVideo,$scope.listTagsVideo);
        };


        $scope.classTitleWebsite = "contentInput inputStyleContent";
        $scope.classDescriptionWebsite = "contentInput inputStyleContent";
        $scope.classLinkWebsite = "contentInput inputStyleContent";
        $scope.classListTagsWebsite = "contentInput inputStyleContent";
        $scope.classSubmitWebsite = "submitContentError";
        $scope.isFormValidWebsite = false;

        $scope.checkFormWebsite = function(){
            if ($scope.titleWebsite.length < 30 && $scope.titleWebsite !== undefined &&
                $scope.descriptionWebsite.length < 20 && $scope.descriptionWebsite !== undefined &&
                $scope.linkWebsite.length < 50 && $scope.linkWebsite !== undefined &&
                $scope.listTagsWebsite.length < 100 && $scope.listTagsWebsite !== undefined){
                $scope.classSubmitWebsite = "submitContent";
                $scope.isFormValidWebsite = true;
            }else{
                $scope.isFormValidWebsite = false;
                $scope.classSubmitWebsite = "submitContentError";
            }
        };

        $scope.checkLengthTitleWebsite = function(){
            if ($scope.titleWebsite.length < 30){
                $scope.classTitleWebsite = "contentInput inputStyleContent";
            }else{
                $scope.classTitleWebsite = "contentInput inputStyleContentError";
            }
        };

        $scope.checkLengthDescriptionWebsite = function(){
            if ($scope.descriptionWebsite.length < 20){
                $scope.classDescriptionWebsite = "contentInput inputStyleContent";
            }else{
                $scope.classDescriptionWebsite = "contentInput inputStyleContentError";
            }
        };

        $scope.checkLengthLinkWebsite = function(){
            if ($scope.linkWebsite.length < 50){
                $scope.classLinkWebsite = "contentInput inputStyleContent";
            }else{
                $scope.classLinkWebsite = "contentInput inputStyleContentError";
            }
        };

        $scope.checkLengthListTagsWebsite = function(){
            if ($scope.listTagsWebsite.length < 100){
                $scope.classListTagsWebsite = "contentInput inputStyleContent";
            }else{
                $scope.classListTagsWebsite = "contentInput inputStyleContentError";
            }
        };

        $scope.validateWebsite = function(){
            contentService.createWebsite($scope.titleWebsite,$scope.descriptionWebsite,$scope.linkWebsite,$scope.listTagsWebsite);
            contentService.eraseInputValues($scope.titleWebsite,$scope.descriptionWebsite,$scope.linkWebsite,$scope.listTagsWebsite);
        };


        $scope.classTitleSocialNetwork = "contentInput inputStyleContent";
        $scope.classDescriptionSocialNetwork = "contentInput inputStyleContent";
        $scope.classLinkSocialNetwork = "contentInput inputStyleContent";
        $scope.classListTagsSocialNetwork = "contentInput inputStyleContent";
        $scope.classSubmitSocialNetwork = "submitContentError";
        $scope.isFormValidSocialNetwork = false;

        $scope.checkFormSocialNetwork = function(){
            if ($scope.titleSocialNetwork.length < 30 && $scope.titleSocialNetwork !== undefined &&
                $scope.descriptionSocialNetwork.length < 20 && $scope.descriptionSocialNetwork !== undefined &&
                $scope.linkSocialNetwork.length < 50 && $scope.linkSocialNetwork !== undefined &&
                $scope.listTagsSocialNetwork.length < 100 && $scope.listTagsSocialNetwork !== undefined){
                $scope.classSubmitSocialNetwork = "submitContent";
                $scope.isFormValidSocialNetwork = true;
            }else{
                $scope.isFormValidSocialNetwork = false;
                $scope.classSubmitSocialNetwork = "submitContentError";
            }
        };

        $scope.checkLengthTitleSocialNetwork = function(){
            if ($scope.titleSocialNetwork.length < 30){
                $scope.classTitleSocialNetwork = "contentInput inputStyleContent";
            }else{
                $scope.classTitleSocialNetwork = "contentInput inputStyleContentError";
            }
        };

        $scope.checkLengthDescriptionSocialNetwork = function(){
            if ($scope.descriptionSocialNetwork.length < 20){
                $scope.classDescriptionSocialNetwork = "contentInput inputStyleContent";
            }else{
                $scope.classDescriptionSocialNetwork = "contentInput inputStyleContentError";
            }
        };

        $scope.checkLengthLinkSocialNetwork = function(){
            if ($scope.linkSocialNetwork.length < 50){
                $scope.classLinkSocialNetwork = "contentInput inputStyleContent";
            }else{
                $scope.classLinkSocialNetwork = "contentInput inputStyleContentError";
            }
        };

        $scope.checkLengthListTagsSocialNetwork = function(){
            if ($scope.listTagsSocialNetwork.length < 100){
                $scope.classListTagsSocialNetwork = "contentInput inputStyleContent";
            }else{
                $scope.classListTagsSocialNetwork = "contentInput inputStyleContentError";
            }
        };

        $scope.validateSocialNetwork = function(){
            contentService.createSocialNetwork($scope.titleSocialNetwork,$scope.descriptionSocialNetwork,$scope.linkSocialNetwork,$scope.listTagsSocialNetwork);
            contentService.eraseInputValues($scope.titleSocialNetwork,$scope.descriptionSocialNetwork,$scope.linkSocialNetwork,$scope.listTagsSocialNetwork);
        };


    }])

    .service('contentService',function($http){
        'use strict';
        function createVideo(titleVideo,descriptionVideo,linkVideo,listTagsVideo){
         $http({
            method:'POST',
            url:"http://localhost:8080/FireUpProject/rest/video/create",
            params:{titleVideo:titleVideo, descriptionVideo:descriptionVideo, linkVideo:linkVideo, listTagsVideo:listTagsVideo}
         })
             .success(function(){
                console.log("create VIDEO success");
             })
             .error(function(){
                 console.log("create VIDEO failed");
             });
        }

        function createWebsite(titleWebsite,descriptionWebsite,linkWebsite,listTagsWebsite){
            $http({
                method:'POST',
                url:"http://localhost:8080/FireUpProject/rest/website/create",
                params:{titleWebsite:titleWebsite, descriptionWebsite:descriptionWebsite, linkWebsite:linkWebsite, listTagsWebsite:listTagsWebsite}
            })
                .success(function(){
                    console.log("create WEBSITE success");
                })
                .error(function(){
                    console.log("create WEBSITE failed");
                });
        }

        function createSocialNetwork(titleSocialNetwork,descriptionSocialNetwork,linkSocialNetwork,listTagsSocialNetwork){
            $http({
                method:'POST',
                url:"http://localhost:8080/FireUpProject/rest/socialnetwork/create",
                params:{titleSocialNetwork:titleSocialNetwork, descriptionSocialNetwork:descriptionSocialNetwork, linkSocialNetwork:linkSocialNetwork, listTagsSocialNetwork:listTagsSocialNetwork}
            })
                .success(function(){
                    console.log("create SOCIAL NETWORK success");
                })
                .error(function(){
                    console.log("create SOCIAL NETWORK failed");
                });
        }

        function eraseValues(title,description,link,listTags){
            title = undefined;
            description = undefined;
            link = undefined;
            listTags = undefined;
        }

        return{
            createVideo: function(titleVideo,descriptionVideo,linkVideo,listTagsVideo){
                createVideo(titleVideo,descriptionVideo,linkVideo,listTagsVideo);
            },
            createWebsite: function(titleWebsite,descriptionWebsite,linkWebsite,listTagsWebsite){
                createWebsite(titleWebsite,descriptionWebsite,linkWebsite,listTagsWebsite);
            },
            createSocialNetwork: function(titleSocialNetwork,descriptionSocialNetwork,linkSocialNetwork,listTagsSocialNetwork){
                createSocialNetwork(titleSocialNetwork,descriptionSocialNetwork,linkSocialNetwork,listTagsSocialNetwork);
            },
            eraseInputValues: function(title,description,link,listTags){
                eraseValues(title,description,link,listTags);
            }
        };
    });