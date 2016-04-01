var rabidMongoose = require("mongoose");
var Atlas = rabidMongoose.Schema;

var heroes = new Atlas({
  alias: {type: String},
  first_name: {type: String},
  last_name: {type: String},
  city: {type: String},
  power_name: {type: String}
});

module.exports = rabidMongoose.model("heroes", heroes);
