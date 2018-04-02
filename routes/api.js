var express = require('express');
var router = express.Router();
var dal = require('../dataAccessLayer');

// a data api
router.get('/example', function(req, res) {
    dal.getExampleItemData()
    .then(function(result) {
        res.json(result);
    })
    .fail(function(err) {
        res.status(500).send(result);
    })
});

router.get('/avg', function(req, res) {
    dal.getAvgDaily()
    .then(function(result) {
        res.json(result);
    })
    .fail(function(err) {
        res.status(500).send(result);
    })
});

module.exports = router;