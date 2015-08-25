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
    /* If event.data exists, then the user is editing an existing event. */
    // event.data
    $scope.startTime = new Date();
    $scope.endTime = new Date();
    /*  */

    this.saveEventInfo = function(){

    };

    this.renderTimePicker = function(){
      console.log("Hello!");
    }
  };
}());
