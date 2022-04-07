"use strict";

var express = require('express');

var router = express.Router();

var foodManager = require('../Manager/foodManager');

var uploader = require('../services/upload');

var newFood = new foodManager();
router.post('/', function (req, res) {
  var food = req.body;
  newFood.createNewFood(food).then(function (result) {
    return res.send(result);
  });
});
router.get('/:id', function (req, res) {
  var id = req.params.id;
  newFood.searchById(id).then(function (result) {
    return console.log(result);
  });
});
router.put('/:id', function (req, res) {
  var id = req.params.id;
  var updatefood = req.body;
  newFood.updateUsers(id, updatefood).then(function (result) {
    return console.log(result);
  });
});
module.exports = router;