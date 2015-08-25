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
 * Request has been fulfilled and a new resource has been created.
 */
router.post('/', function(req, res){
  controller.create(req, res);
});

/**
 * GET
 * Get a single event based on provided ID. (200)
 */
router.get('/:event_id', function(req, res){
  controller.show(req, res);
});

/**
 * PUT
 * Update an event based on provided ID. (200)
 */
router.put('/:event_id', function(req, res){
  controller.update(req, res);
});

/**
 * DELETE
 * Remove an event based on provided ID. (204)
 * Server has fulfilled the request, but does not need to return an entity-body.
 */
router.delete('/:event_id', function(req, res){
  controller.delete(req, res);
});

module.exports = router;
