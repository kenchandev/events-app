'use strict';

/* Avoid polluting the global scope via IIFE. */
(function(){
  /* Define a controller for handling the listing of suggested events based on search. */
  angular.module('app')
         .controller('SuggestionsController', ['$scope', '$state', 'EventsService', 'events', 'event', SuggestionsController])
         .directive('onFinishRender', ['$timeout', renderComplete]);

  function SuggestionsController($scope, $state, EventsService, events, event){
    if(events.status === 200){
      this.events = _(events.data).reverse().value(); /* Need this for rendering the list of suggested events with the most recent at the top. */
    }

    /* Execute this when the delete button is clicked. */
    this.deleteEvent = function(index, event_id){
      var _this = this; /* Different reference of this inside of success callback. */

      EventsService.deleteEvent(event_id)
                   .success(function(){
                     _this.events = _.without(_this.events, _.findWhere(_this.events, {_id: event_id})); /* Two-way data binding helps to remove the UI element. */
                     $('.collapse-card').paperCollapse();
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
