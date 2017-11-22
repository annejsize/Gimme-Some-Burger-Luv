// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var router = express.Router();
// Requiring our Burger model
var db = require("../models");


router.get("/", function(req, res) {
  db.Burger.findAll({})
  .then(function(dbBurger) {
    // res.json(dbBurger);
    var hbsObject = {
      burgers: dbBurger
    };
    console.log(hbsObject);
   res.render("index", hbsObject);
  });
});

  //creates a new burger to be devoured
router.post("/burgers/create", function(req, res) {
  var newBurger = req.body.burger_name;

  db.Burger.create({
    burger_name: newBurger,
    devoured: 0
  });

  res.redirect('/');
});

//updates the burger to devoured
router.put('/burgers/update', function(req,res) {
  db.Burger.update({
    devoured: 1,
  },{
    where: {
      id: [req.body.id]
    }
  });

  res.redirect('/');
});

module.exports = router;
