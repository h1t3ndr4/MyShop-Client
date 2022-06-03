const express = require("express");
const router = express.Router();
const Product = require("../models/products.model");

router.post("/", async (req, res) => {
  try {
    const Products = await Product.create(req.body);
    return res.status(200).send(Products);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const Products = await Product.find().lean().exec();
    return res.status(200).send(Products);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const Products = await Product.findById(req.params.id).lean().exec();
    return res.status(200).send(Products);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
