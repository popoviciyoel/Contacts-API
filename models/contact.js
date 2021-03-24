// module to define schema for contact model
var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var ContactSchema = new Schema(
  {
    firstName: {type: String, max: 100},
    lastName: {type: String, max: 100},
    email: {type: String},
    phoneNumber: {type: String},
  }
);

//Export model - compiles a model
// instances of models are called documents

module.exports = mongoose.model('Contact', ContactSchema);


