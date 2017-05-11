var express = require("express");

var router = express.Router();
var db = require("../models");

// get route -> index
router.get("/", function (req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
    db.burger.findAll({}).then(function (data) {
        var hbsObject = {burgers: data};
        res.render("index", hbsObject);
    });
});
router.post("/burgers/create", function (req, res) {
    db.burger.create(req.body).then(function (result) {
        res.json(result);
        res.redirect("/");
    });
});


router.put("/burgers/update", function (req, res) {
    db.burger.update({
        devoured: true
    }, {
        where: {
            id: req.params.id
        }
    }).then(function (result) {


        res.redirect("/");
    });
});

module.exports = router;
