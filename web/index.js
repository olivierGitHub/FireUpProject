/**
 * Created by oliver on 11/03/15.
 */


/*global angular */
angular.module('app', ['ui.router', 'loginApp', 'homeApp', 'signupApp', 'contentApp', 'menuApp'])

    .config(function ($stateProvider, $urlRouterProvider) {
        'use strict';
        $urlRouterProvider.otherwise("/login");

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'login/login.html'
            })
            .state('menu', {
                url: '/menu',
                templateUrl: 'menu/menu.html'
            })
            .state('menu.home', {
                url: '/home',
                templateUrl: 'home/home.html'
            })
            .state('menu.signup', {
                url: '/signup',
                templateUrl: 'signup/signup.html'
            })
            .state('menu.content', {
                url: '/content',
                templateUrl: 'content/content.html'
            });
    });