/**
 * Created by oliver on 21/01/15.
 */

/*global angular */
angular.module('homeApp', ['ui.router', 'home'])

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
                templateUrl: 'signup/signup.html'
            });


    });
