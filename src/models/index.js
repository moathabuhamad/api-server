"use strict";

const { Sequelize, DataTypes } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();
const clothes = require("./clothes.js");
const food = require("./food.js");
const Collection = require("./library/Collection.js");


const postgresURL =
  process.env.NODE_ENV == "test" ? "sqlite:memory" : process.env.DATABASE_URL;
const sequelizeOptions =
  process.env.NODE_ENV === "production"
    ? { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } } }
    : {};
const sequelize = new Sequelize(postgresURL, sequelizeOptions);
let foodModel = food(sequelize, DataTypes);
let foodCollection = new Collection(foodModel);
let clothesModel = clothes(sequelize, DataTypes);
let clothesCollection = new Collection(clothesModel);

module.exports = {
  db: sequelize,
  Clothes: clothesCollection,
  Food: foodCollection,
};
