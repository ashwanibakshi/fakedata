var mongoose = require('mongoose');

var fakerSchema =  new mongoose.Schema({
    firstname:String,
    lastname:String,
    phonenumber:String,
    city:String,
    state:String,
    country:String
});

module.exports = mongoose.model('fakerCollection',fakerSchema);