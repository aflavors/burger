// Import models connection.
var express = require("express");
var router = express.Router();

//Import the model (burger.js) to use its database function
var burger = require("../models/burger.js");

// Create all the routes and set up logic within those routes where required.

//selectAll - GET
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var handlebarObject = {
        burger: data
      };
      //console.log(handlebarObject);
      res.render("index", handlebarObject);
    });
  });

//insertOne - POST
router.post("/api/burger", function(req, res) {
    burger.insertOne([
      "burger_name", "devoured"
    ], [
      req.body.burgerName, 0
    ], function() {
      res.redirect("/");
    });
  });

//updateOne - PUT
router.put("/burger/:id", function(req, res) {
  //console.log("Inside put route");
    var condition = "id = " + req.params.id;
  
    console.log("condition: "+ condition);
  
    burger.updateOne({
      devoured: true
    }, condition, function() {
      console.log("Done");
      res.redirect(303, "/")
    });
  });

// Export routes for server.js to use.
module.exports = router;