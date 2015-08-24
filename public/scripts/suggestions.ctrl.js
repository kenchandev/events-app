'use strict';

/* Avoid polluting the global scope via IIFE. */
(function(){
  /* Define a controller for handling the listing of suggested events based on search. */
  angular.module('app')
         .controller('SuggestionsController', ['$state', 'EventsService', 'events', 'event', SuggestionsController]);

  console.log('Hello!');

  function SuggestionsController($state, EventsService, events, event){
    console.log('Event', event);
    console.log('Events', events);

    console.log('What"s up!');

    this.deleteEvent = function(event_id){
      EventsService.deleteEvent(event_id);
    };
  };
}());
