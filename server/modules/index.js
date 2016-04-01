var express = require("express");
var router = express.Router();
var path = require("path");
var heroes = require("../models/heroes.js");

router.get("/hero", function(req, res){
  heroes.find({}, function(err, data){
    if(err){
      console.log("dag nabit! Error in ze get call in index", err);
    }
    res.send(data);
  });
});

router.post("/hero", function(req, res){
  console.log("in router.post req.body is", req.body);
  var addedHero = new heroes({"alias" : req.body.alias, "first_name" : req.body.first_name, "last_name" : req.body.last_name, "city" : req.body.city, "power_name" : req.body.power_name});
  addedHero.save(function(err, data){
    if(err){
      console.log("Shimmer me timbers! Err saving ze hero!", err);
    }
    res.send(data);
  });
});

router.delete("/hero/:id", function(req, res){
  console.log("Ai yai yai yai yai! Deleting in index", req.params.id);
  heroes.remove({_id: req.params.id}, function(err, data){
    if(err){
      console.log("There has been an error sending the hero to Valhalla", err);
    }
    res.status(200).send();
  });
});

router.get("/*", function(req, res){
  var file = req.params[0] || "/views/index.html";
  res.sendFile(path.join(__dirname, "../public/", file));
});

module.exports = router;
