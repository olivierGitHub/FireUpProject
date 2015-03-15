/**
 * Created by oliver on 11/03/15.
 */


/*global angular */
angular.module('app', ['ui.router', 'loginApp', 'homeApp', 'profileApp', 'contentApp','settingsApp', 'menuApp'])

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
            .state('menu.profile', {
                url: '/profile',
                templateUrl: 'profile/profile.html'
            })
            .state('menu.content', {
                url: '/content',
                templateUrl: 'content/content.html'
            })
            .state('menu.settings', {
                url: '/settings',
                templateUrl: 'settings/settings.html'
            })
            .state('menu.settings.security', {
                url: '/settings',
                templateUrl: 'settings/security/security.html'
            })
            .state('menu.settings.preferences', {
                url: '/settings',
                templateUrl: 'settings/preferences/preferences.html'
            });
    });