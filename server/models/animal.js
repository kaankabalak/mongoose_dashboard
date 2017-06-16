// require mongoose
var mongoose = require('mongoose');
// create the schema
var AnimalSchema = new mongoose.Schema({
 name: String,
 description: String
})
var Animal = mongoose.model('Animal', AnimalSchema); // We are setting this Schema in our Models as 'User'