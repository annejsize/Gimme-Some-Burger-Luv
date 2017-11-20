var express = require("express");
var router = express.Router();

//Pull in the data from the database by way of ORM
var burgerluv = require("../models/burger.js");

router.get('/', function(req, res){
  burgerluv.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.put('/burgers/update', function(req,res) {
  burgerluv.update(req.body.id, function(result){
    console.log(result);
    res.redirect("/");
});
});


router.post("/burgers/create", function(req, res) {
    burgerluv.add(req.body.burger_name, function(result){
      res.redirect("/");
    });
  });






// Export routes for server.js to use.
module.exports = router;
