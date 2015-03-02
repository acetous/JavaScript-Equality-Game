'use strict';

/**
 * @ngdoc overview
 * @name javaScriptEqualityApp
 * @description
 * # javaScriptEqualityApp
 *
 * Main module of the application.
 */
angular
  .module('javaScriptEqualityApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/equals', {
        templateUrl: 'views/equals.html',
        controller: 'EqualsCtrl'
      })
      .when('/if', {
        templateUrl: 'views/if.html',
        controller: 'IfCtrl'
      })
      .otherwise({
        redirectTo: '/equals'
      });
  });
