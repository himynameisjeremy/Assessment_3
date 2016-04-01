var mongoose = require("mongoose");

var mongoURI =
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/heroes_of_the_realm';

var mongoDB = mongoose.connect(mongoURI).connection;

mongoDB.on("error", function(err){
  console.log("Demon from Hades! Mongo Connection Error:", err);
});

mongoDB.on("open", function(err){
  console.log("Ze Mongod looks happily upon us! Mongo connection open.");
});

module.exports = mongoDB;
