'use strict';

/* Avoid polluting the global scope via IIFE. */
(function(){
  /* Define a controller for handling the listing of suggested events based on search. */
  angular.module('app')
         .controller('SuggestionsController', ['$scope', '$state', 'EventsService', 'events', 'event', SuggestionsController])
         .directive('onFinishRender', ['$timeout', renderComplete]);

  function SuggestionsController($scope, $state, EventsService, events, event){
    if(events.status === 200){
      this.events = _(events.data).reverse().value(); /* Need this for rendering the list of suggested events. */
    }

    console.log(this.events);

    /* Execute this when the delete button is clicked. */
    this.deleteEvent = function(index, event_id){
      this.events = _.without(this.events, _.findWhere(this.events, {_id: event_id}));
      // this.events.splice(index, 1); /* Two-way data binding helps to remove the UI element. */
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
