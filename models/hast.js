var mongoose = require('mongoose');

var HastSchema = new mongoose.Schema({
	firstname:      { type: String },
    middlename:     { type: String },
    lastname:       { type: String },
    gender:         { type: String },
    age:            { type: Number },
    weight:         { type: Number },
    relation:       { type: String },
    //gpslocation:    { type: Number },
    username:       { type: String },
    password:       { type: String },
  updated_at: { type: Date, 'default': Date.now }
});

module.exports = mongoose.model('Hast', HastSchema);