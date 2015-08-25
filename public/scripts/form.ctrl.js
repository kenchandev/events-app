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
    /* Participants is not in a String format for inserting into form when editing.
     * Hence, convert the array of names to String.
     * Don't forget to convert the to and from times to yyyy-MM-ddTHH:mm:ss format.
     */
    if(event.data){
      if(event.data.from){
        event.data.from = new Date(event.data.from);
      }

      if(event.data.to){
        event.data.to = new Date(event.data.to);
      }

      event.data.participants = event.data.participants.join(", ");
    }

    /*
     * If event.data exists, then the user is editing an existing event. Hence, set this.event to event.data.
     * If the user is adding a new event, then event.data is undefined. Hence, set this.event to an empty object.
     */
    this.event = event.data || {};

    console.log(this.event);

    this.saveEventInfo = function(){
      //.toISOString()
      console.log(this.event);
    };
  };
}());
