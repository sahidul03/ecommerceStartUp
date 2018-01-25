var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Order = require('../models/Order.js');

/* GET ALL Orders */
router.get('/', function(req, res, next) {
  Order.find(function (err, orders) {
    if (err) return next(err);
    res.json(orders);
  });
});

/* GET SINGLE Order BY ID */
router.get('/:id', function(req, res, next) {
  Order.findById(req.params.id, function (err, order) {
    if (err) return next(err);
    res.json(order);
  });
});

/* SAVE Order */
router.post('/', function(req, res, next) {
  Order.create(req.body, function (err, order) {
    if (err) return next(err);
    res.json(order);
  });
});

/* UPDATE Order */
router.put('/:id', function(req, res, next) {
  Order.findByIdAndUpdate(req.params.id, req.body, function (err, order) {
    if (err) return next(err);
    res.json(order);
  });
});

/* DELETE Order */
router.delete('/:id', function(req, res, next) {
  Order.findByIdAndRemove(req.params.id, req.body, function (err, order) {
    if (err) return next(err);
    res.json(order);
  });
});

module.exports = router;
