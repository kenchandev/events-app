'use strict';

/* Avoid polluting the global scope via IIFE. */
/* Navigation bar has no functionality dealing with data. Hence, it's separated into its own directive. */
(function(){
  /* Define a controller for handling the listing of suggested events based on search. */
  angular.module('app')
         .directive('navBarHeader', NavigationBar);

  /* Return a Directive Definition Object (DDO). */
  function NavigationBar(){
    return {
      restrict: 'E',
      replace: true,  /* Default value is false. */
      templateUrl: './partials/navbar.html'
    };
  }
}());
