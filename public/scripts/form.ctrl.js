'use strict';

/* Avoid polluting the global scope via IIFE. */
(function(){
  /* Define a controller for handling the listing of suggested events based on search. */
  angular.module('app')
         .controller('FormController', ['$state', 'EventsService', 'events', 'event', FormController]);

  function FormController($state, EventsService, events, event){
    
  };
}());
