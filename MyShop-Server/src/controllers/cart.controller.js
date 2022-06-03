const express = require("express");

const Cart = require("../models/cart.model");

const router = express.Router();

router.post("/:id", async (req, res) => {
  try {
    let cartData = await Cart.findOne({ user: req.params.id }).lean().exec();
    if (cartData) {
      let x = [...cartData.products, req.body.itemId];
      let output = await Cart.findByIdAndUpdate(
        cartData._id,
        { products: x },
        { new: true }
      )
        .lean()
        .exec();
      res.send(output);
    } else {
      const carts = await Cart.create(req.body);
      res.send(carts);
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.get("", async (req, res) => {
  try {
    const carts = await Cart.find().lean().exec();
    res.send(carts);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const carts = await Cart.findOne({ user: req.params.id })
      .populate("products")
      .lean()
      .exec();
    if (carts !== null) {
      res.send(carts);
    } else {
      const carts = await Cart.create({ products: [], user: req.params.id });
      res.send(carts);
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    let cartData = await Cart.findOne({ user: req.params.id }).lean().exec();
    let x = cartData.products.filter((e) => {
      if (e != req.body.itemId) {
        return e;
      }
    });
    let output = await Cart.findByIdAndUpdate(
      cartData._id,
      { products: x },
      { new: true }
    )
      .populate("products")
      .lean()
      .exec();
    res.send(output);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = router;
