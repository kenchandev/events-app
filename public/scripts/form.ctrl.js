'use strict';

/* Avoid polluting the global scope via IIFE. */
(function(){
  /* Define a controller for handling the web form. */
  angular.module('app')
         .controller('FormController', ['$state', 'EventsService', 'events', 'event', FormController]);

  /*
   * Two Cases:
   *  - Editing an existing event.
   *  - Adding a new event.
   */
  function FormController($state, EventsService, events, event){
    /* If event.data exists, then the user is editing an existing event. */
    // event.data

    /*  */

    this.saveEventInfo = function(){

    };
  };
}());
