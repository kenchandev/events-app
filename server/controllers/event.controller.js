var _ = require('lodash');

/* Import the model created with Mongoose ODM. */
var Event = require('../models/event.model');

/**
 * @description :: Server-side logic for managing events through RESTful API.
 */
module.exports = {

  /**
   * Helper function for getting all events within the MongoDB datebase.
   */
  list: function(req, res){
    Event.find(function(err, events){
      if(err){
        return res.send(500, err);
      }
      return res.json(200, events);
    });
  },

  /**
   * Helper function for creating a new event based on inputted data from form.
   */
  create: function(req, res){
    var data = req.body;

    Event.create(data, function(err, event){
      if(err){
        return res.send(500, err);
      }
      return res.json(201, event);
    });
  },

  /**
   * Helper function for finding a particular event based on its unique _id value.
   */
  show: function(req, res){
    Event.findById(req.params.event_id, function(err, event){
      if(err){
        return res.send(500, err);
      }
      if(!event){
        return res.send(404);
      }
      return res.json(200, event);
    });
  },

  /**
   * Helper function for updating an existing event.
   */
  update: function(req, res){
    //  Since the event ID is already provided as a request parameter, set the ID value within the body to this value to sync it.
    req.body._id = req.params.event_id;
    Event.findById(req.params.event_id, function(err, event){
      if(err){
        return res.send(500, err);
      }
      if(!event){
        return res.send(404);
      }
      _.forIn(Event.schema.paths, function(value, key){
        console.log('Key:', key);
        event[key] = (key === 'to' || key === 'from' || key === 'createdOn') ? new Date(req.body[key]) : req.body[key];
      });
      event.save(function(err){
        if(err){
          return res.send(500, err);
        }
        return res.json(200, event);
      });
    });
  },

  /**
   * Helper function for deleting a particular event based on its unique _id value.
   */
  delete: function(req, res){
    Event.findById(req.params.event_id, function(err, event){
      if(err){
        return res.send(500, err);
      }
      if(!event){
        return res.send(404);
      }
      event.remove(function(err){
        if(err){
          return res.send(500, err);
        }
        return res.send(204); /* Server has fulfilled the request, but does not need to return an entity-body. */
      });
    });
  },
}
