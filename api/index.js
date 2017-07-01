var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET home page. */
router.get('/', function(req, res) {
    console.log(req.query.data);
    var fileName = "data/" + req.query.data + ".json";

    var obj;
    fs.readFile(fileName, 'utf8', function (err, data) {
        if (err) throw res.json(err);
        obj = JSON.parse(data);
        console.log(obj);
        res.json(obj);
    });


});

module.exports = router;