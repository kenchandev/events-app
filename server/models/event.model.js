//  Import the Mongoose module.
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//  Establish data types, properties and default values to the Schema.
var EventSchema = new Schema({
  title: { type: String },
  from: { type: Date },
  to: { type: Date },
  location: { type: String },
  description: { type: String },
  participants: [{ type: String }],
  createdOn: [{ type: Date, default: Date.now }]
});

module.exports = mongoose.model('Event', EventSchema); 
