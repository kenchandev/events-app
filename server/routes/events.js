'use strict';

/* Define routes for the RESTful API. */
var express = require('express');
var router = express.Router();

/* Import controller. */
var controller = require('../controllers/event.controller');

/* Simple middleware for all routes and requests. */
router.use(function(req, res, next){
  console.log('An action has been executed by the server.');
  next();
});

/**
 * GET
 * Get all events. (200)
 */
router.get('/', function(req, res){
  controller.list(req, res);
});

/**
 * POST
 * Add an event to the MongoDB database. (201)
 */
router.post('/', function(req, res){
  controller.create(req, res);
});

/**
 * GET
 * Get a single event based on provided ID. (200)
 */
router.get('/:event_id', function(req, res){
  controller.show()
});

/**
 * PUT
 * Update an event based on provided ID. (200)
 */
router.put('/:event_id', function(req, res){

});

/**
 * DELETE
 * Remove an event based on provided ID. (204)
 */
router.delete('/:event_id', function(req, res){
  Event.findById(req.params.event_id, function(err, event){
    if(err){
      return serverErrorHandler(err, res);
    }
    if(!event){
      return notFoundHandler(res);
    }
    event.remove(function(err){
      if(err){
        return serverErrorHandler(err, res);
      }
      return noContentHandler(res);
    });
  });
});

/* Server has fulfilled the request, but does not need to return an entity-body. */
function noContentHandler(res){
  return res.send(204);
};

/* Handle not found errors encountered while accessing API. */
/* Ex: User fails to provide a valid ID value. */
function notFoundHandler(res){
  return res.send(404);
};

/* Handle server errors encountered while accessing API. */
function serverErrorHandler(err, res){
  return res.send(500, err);
};

module.exports = router;
