'use strict';

/* Avoid polluting the global scope via IIFE. */
(function(){
  /* Define a controller for handling the listing of suggested events based on search. */
  angular.module('app')
         .controller('suggestionsController', ['$state, EventsService, events, event', SuggestionsController]);

  function SuggestionsController($state, EventsService, events, event){
    console.log(event);
    console.log(events);

    this.deleteEvent = function(event_id){
      EventsService.deleteEvent(event_id);
    };
  };
}());
