const mongoose = require("mongoose");

// Products Schema
const productSchema = new mongoose.Schema(
  {
    prod_name: { type: String, required: true },
    price: { type: String, required: true },
    strikedOffPrice: { type: String, required: true },
    prod_discount: { type: String, required: true },
    imgUrl: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;
