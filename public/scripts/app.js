'use strict';

/* Avoid polluting the global scope. */
(function(){
  var app = angular.module('app', [
      'ui-router'
  ]);

  /* Change application views based on application state. */
  app.config(function($stateProvider, $urlRouterProvider){
    /* Default home page is the listing of suggestions at '/'. */
    $urlRouterProvider.otherwise('/suggestions');

    $stateProvider
      .state('suggestions', {
        url: '/suggestions',
        templateUrl:
      })
      .state('edit-form', {
        url: '/edit-form',
        templateUrl:
      })
      .state('add-form', {
        url: '/add-form',
        templateUrl:
      });
  });

  /* Utilize $http service to communicate with RESTful API via the browser's XMLHttpRequest object or JSONP. */
  app.service('EventService', ['http'], function($http){

    var getRandomPostCode = function (success, error) {
      $http.get('http://api.postcodes.io/random/postcodes')
        .success(function(data, status, headers, config) {
          success(data, status, headers, config);
        })
        .error(function(data, status, headers, config) {
          error(data, status, headers, config);
        });
      };
      this.getRandomPostCode = getRandomPostCode;

  });


}());
