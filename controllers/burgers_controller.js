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
      console.log(handlebarObject);
      res.render("index", handlebarObject);
    });
  });

//insertOne - POST
router.post("/", function(req, res) {
    burger.insertOne([
      "burger_name", "devoured"
    ], [
      req.body.burgerName, 0
    ], function() {
      res.redirect("/");
    });
  });

//updateOne - PUT
router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne({
      devoured: req.body.devour
    }, condition, function() {
      res.redirect("/");
    });
  });

// Export routes for server.js to use.
module.exports = router;