var express  = require('express');
var router   = express.Router();

var mongoose = require('mongoose');
var Hast     = require('../models/hast.js');

/* List: GET /hast listing. */
router.get('/', function(req, res, next) {
	Hast.find(function(err, get) {
		if(err) return next(err);
		res.json(get);
	});
  //res.send('respond with a resource');
});

/* Create: POST /hast */
router.post('/', function(req, res, next) {
  Hast.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Show by Id: GET /hast/id */
router.get('/:id', function(req, res, next) {
  Hast.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Update: PUT /hast/:id */
router.put('/:id', function(req, res, next) {
  Hast.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /hast/:id */
router.delete('/:id', function(req, res, next) {
  Hast.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
