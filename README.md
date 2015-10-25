# Events Application

Events can be easily managed through this intuitive and interactive application. The interface is responsive for mobile and desktop screens!

![Alt text](https://github.com/KenChan23/events-app/blob/master/public/images/event-tracker-screenshot.png "Event Tracker")

##  Usage

1. `bower install`
2. `npm install`
3. `npm start`

Inside of your favorite browser (preferable Chrome, Safari or Opera for reasons mentioned in the "Notes" section), navigate to `localhost:8000`. To change the port, modify bin/www.

This application's RESTful API endpoints were tested with Postman:

- GET '/'
- POST '/'
- GET '/:event_id'
- PUT '/:event_id'
- DELETE '/:event_id'

##  Other Items to Finish

1. Implement e2e and unit tests using Protractor and Karma respectively.
2. Fix gulpfile.js file.

##  Notes

1. The following is a beautiful guide describing how to keep AngularJS controllers maintainable and small via UI-Router:

   https://scotch.io/tutorials/making-skinny-angularjs-controllers

2. For Material Design icons, refer to the following URL:

   https://klarsys.github.io/angular-material-icons/

3. Another small issue encountered:

   http://stackoverflow.com/questions/25065699/why-does-angularjs-with-ui-router-keep-firing-the-statechangestart-event

4. Date and time picker (datetime-local) feature works in Chrome, Safari and Opera only...
   This is why the format yyyy-MM-ddTHH:mm:ss is provided within parenthese (for Firefox and Internet Explorer).

5. Angular Materialize, at the time of this writing, does not feature an accordion widget. Instead, the paper-collapse library was utilized to display more information when expanded.

##  License

MIT
