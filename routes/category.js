var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Category = require('../models/Category.js');

/* GET ALL Categories */
router.get('/', function(req, res, next) {
  Category.find(function (err, categories) {
    if (err) return next(err);
    res.json(categories);
  });
});

/* GET SINGLE Category BY ID */
router.get('/:id', function(req, res, next) {
  Category.findById(req.params.id, function (err, category) {
    if (err) return next(err);
    res.json(category);
  });
});

/* SAVE Category */
router.post('/', function(req, res, next) {
  Category.create(req.body, function (err, category) {
    if (err) return next(err);
    res.json(category);
  });
});

/* UPDATE Category */
router.put('/:id', function(req, res, next) {
  Category.findByIdAndUpdate(req.params.id, req.body, function (err, category) {
    if (err) return next(err);
    res.json(category);
  });
});

/* DELETE Category */
router.delete('/:id', function(req, res, next) {
  Category.findByIdAndRemove(req.params.id, req.body, function (err, category) {
    if (err) return next(err);
    res.json(category);
  });
});

module.exports = router;
