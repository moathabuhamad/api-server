"use strict";

const { Clothes } = require("../models/index.js");
const express = require("express");
const router = express.Router();
console.log(Clothes);
router.post("/clothes", addCloth);
router.get("/clothes/:id", readCloth);
router.put("/clothes/:id", updateCloth);
router.delete("/clothes/:id", deleteCloth);

async function addCloth(req, res) {
  let body = req.body;
  let addedClothes = await Clothes.createData(body);
  res.status(201).json(addedClothes);
}

async function readCloth(req, res) {
  let id = req.params.id;
  res.status(200).json(await Clothes.readData(id));
}

async function updateCloth(req, res) {
  let id = req.params.id;
  await Clothes.updateData(id,req.body);
  res.status(200).json(await Clothes.readData(id));
}

async function deleteCloth(req, res) {
  let id = req.params.id;
  await Clothes.destroy(id);
  res.status(200).json(await Clothes(id));
}

module.exports = router;
