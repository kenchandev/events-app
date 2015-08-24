'use strict';

/* Avoid polluting the global scope via IIFE. */
(function(){
  var app = angular.module('app', [
      'ui-router'
  ]);

  /* Change application views based on application state. */
  app.config(function($stateProvider, $urlRouterProvider){
    /* Default home page is the listing of suggestions at '/'. */
    $urlRouterProvider.otherwise('/suggestions');

    /* Resolve provides controllers with content/data that is custom to the state. */
    $stateProvider
      .state('suggestions', {
        url: '/suggestions',
        resolve: {
          events: ['EventsService', function(EventsService){
            return EventsService.listEvents();
          }],
          event: function(){
            return {};
          }
        },
        templateUrl: './partials/suggestions.html',
        controller: '',
        controllerAs: ''
      })
      .state('edit-form', {
        url: '/event-form/:event_id',
        resolve: {
          events: function(){
            return {};
          },
          /* $stateParams holds query parameters. */
          event: ['$stateParams', 'EventsService', function($stateParams, EventsService){
            /* For a filled form. */
            return EventsService.showEvent($stateParams.event_id);
          }]
        },
        templateUrl: './partials/form.html',
        controller: '',
        controllerAs: ''
      })
      .state('add-form', {
        url: '/event-form',
        resolve: {
          events: function(){
            return {};
          },
          event: function(){
            /* For a blank form. */
            return {};
          }]
        },
        templateUrl: './partials/form.html',
        controller: '',
        controllerAs: ''
      });
  });

  /* Utilize $http service to communicate with RESTful API via the browser's XMLHttpRequest object or JSONP. */
  app.service('EventsService', ['http', function($http){
    /* GET request to retrieve all events. */
    this.listEvents = function(){
      return $http.get('/api/1.0/events');
    };

    /* POST request to create an event. */
    this.createEvent = function(data){
      return $http.post('/api/1.0/events', data);
    };

    /* GET request to retrieve a single event. */
    this.showEvent = function(event_id){
      return $http.get('/api/1.0/events/' + event_id);
    };

    /* PUT request to update a single event. */
    this.updateEvent = function(event_id, data){
      return $http.put('/api/1.0/events/' + event_id, data);
    };

    /* DELETE request to remove a signle event. */
    this.deleteEvent = function(event_id){
      return $http.delete('/api/1.0/events/' + event_id);
    };
  }]);
}());
