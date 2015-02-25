/**
 * Created by oliver on 21/01/15.
 */

/*global angular */
angular.module('homeApp', ['ui.router'])

    .config(function ($stateProvider, $urlRouterProvider) {
        'use strict';
        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'home/home.html'
            })
            .state('signup', {
                url: '/signup',
                template: '<h1>My Contacts</h1>'
            });


    });
