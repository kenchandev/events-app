'use strict';

/* Avoid polluting the global scope via IIFE. */
(function(){
  /* Define a controller for handling the web form. */
  angular.module('app')
         .controller('FormController', ['$scope', '$state', 'EventsService', 'events', 'event', FormController]);

  /*
   * Two Cases:
   *  - Editing an existing event.
   *  - Adding a new event.
   */
  function FormController($scope, $state, EventsService, events, event){
    /* Participants is not in a String format for inserting into form when editing. Hence, convert the array of names to String. */
    if(event.data){
      event.data.participants = event.data.participants.join(", ");
    }

    /*
     * If event.data exists, then the user is editing an existing event. Hence, set this.event to event.data.
     * If the user is adding a new event, then event.data is undefined. Hence, set this.event to an empty object.
     */
    this.event = event.data || {};

    this.saveEventInfo = function(){

    };
  };
}());
