"use strict";

const { Food } = require("../models/index.js");
const express = require("express");
const router = express.Router();
console.log(Food);
router.post("/food", addFood);
router.get("/food/:id", readFood);
router.put("/food/:id", updateFood);
router.delete("/food/:id", deleteFood);


async function addFood(req, res) {
  let body = req.body;
  let addedFood = await Food.createData(body);
  res.status(201).json(addedFood);
}

async function readFood(req, res) {
  let id = req.params.id;
  res.status(200).json(await Food.readData(id));
}

async function updateFood(req, res) {
  let id = req.params.id;
  await Food.updateData(id,req.body);
  res.status(200).json(await Food.readData(id));
}

async function deleteFood(req, res) {
  let id = req.params.id;
  await Food.deleteData(id);
  res.status(200).json(await Food.readData(id));
}


module.exports = router;