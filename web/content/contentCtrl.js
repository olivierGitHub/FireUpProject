/**
 * Created by oliver on 11/03/15.
 */

/*global angular*/
/*global console*/
/*global alert*/

angular.module('contentApp',[])

    .controller('contentController', ['$scope', 'contentService', function($scope, contentService){
        'use strict';

        $scope.errorClass = "contentInput inputStyleContent";

        $scope.checkLengthTitleVideo = function(){
            if ($scope.titleVideo.length < 30){
                $scope.errorClass = "contentInput inputStyleContent";
            }else{
                $scope.errorClass = "contentInput inputStyleContentError";
            }
        };

        $scope.validateVideo = function(){
            if ($scope.titleVideo.length < 50 && $scope.titleVideo !== undefined &&
                $scope.descriptionVideo.length < 50 && $scope.descriptionVideo !== undefined &&
                $scope.linkVideo.length < 50 && $scope.linkVideo !== undefined &&
                $scope.listTagsVideo.length < 50 && $scope.listTagsVideo !== undefined){
                    contentService.createVideo($scope.titleVideo,$scope.descriptionVideo,$scope.linkVideo,$scope.listTagsVideo);
                    contentService.eraseInputValues($scope.titleVideo,$scope.descriptionVideo,$scope.linkVideo,$scope.listTagsVideo);
            }else{
                    console.log("check data you've just entered");
            }
        };



        $scope.validateWebsite = function(){
            contentService.createWebsite($scope.titleWebsite,$scope.descriptionWebsite,$scope.linkWebsite,$scope.listTagsWebsite);
            contentService.eraseInputValues($scope.titleWebsite,$scope.descriptionWebsite,$scope.linkWebsite,$scope.listTagsWebsite);
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