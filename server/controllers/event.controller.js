/* Import the model created with Mongoose ODM. */
var Event = require('../models/event.model');

/**
 * @description :: Server-side logic for managing events through RESTful API.
 */
module.exports = {

  /**
   *
   */
  list: function(req, res){
    Event.find(function(err, events){
      if(err){
        return res.send(500, err);
      }
      return res.json(events);
    });
  },

  /**
   *
   *
   */
  create: function(req, res){
    console.log(req.body);
  },

  /**
   *
   *
   */
  show: function(req, res){
    Event.findById(req.params.event_id, function(err, event){
      if(err){
        return res.send(500, err);
      }
      if(!event){
        return res.send(404);
      }
      return res.json(event);
    });
  },

  /**
   *
   *
   */
  update: function(req, res){
    console.log(req.body);
  },

  /**
   *
   *
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
