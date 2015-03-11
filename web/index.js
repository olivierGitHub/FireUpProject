/**
 * Created by oliver on 11/03/15.
 */


/*global angular */
angular.module('app', ['ui.router', 'loginApp', 'homeApp', 'signupApp', 'contentApp'])

    .config(function ($stateProvider, $urlRouterProvider) {
        'use strict';
        $urlRouterProvider.otherwise("/login");

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'login/login.html'
            })
            .state('home', {
                url: '/home',
                templateUrl: 'home/home.html'
            })
            .state('signup', {
                url: '/signup',
                templateUrl: 'signup/signup.html'
            })
            .state('content', {
                url: '/content',
                templateUrl: 'content/content.html'
            });
    });