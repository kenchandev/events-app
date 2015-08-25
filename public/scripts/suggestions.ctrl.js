'use strict';

/* Avoid polluting the global scope via IIFE. */
(function(){
  /* Define a controller for handling the listing of suggested events based on search. */
  angular.module('app')
         .controller('SuggestionsController', ['$scope', '$state', 'EventsService', 'events', 'event', SuggestionsController])
         .directive('onFinishRender', ['$timeout', renderComplete]);

  function SuggestionsController($scope, $state, EventsService, events, event){
    if(events.status === 200){
      this.events = events.data; /* Need this for rendering the list of suggested events. */
    }

    /* Execute this when the delete button is clicked. */
    this.deleteEvent = function(index, event_id){
      console.log(this.events);
      console.log(index);
      this.events.splice(index, 1); /* Two-way data binding helps to remove the UI element. */
      console.log(this.events);
      EventsService.deleteEvent(event_id)
                   .success(function(){
                     $state.go('suggestions')
                   });
    };

    /* Need to initialize the collapsible items functionality after ALL have been rendered. */
    $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
      /* Initialize the paper collapsing featuring. */
      $('.collapse-card').paperCollapse();
    });
  };

  function renderComplete($timeout){
    return {
      restrict: 'A',
      link: function(scope, element, attr){
        if(scope.$last === true){
          $timeout(function(){
            scope.$emit('ngRepeatFinished');
          })
        }
      }
    };
  };
}());
