const express = require("express");
const connect = require("./config/db");
const cors = require("cors");
require("dotenv").config();
const { getUsers, register, login } = require("./controllers/auth.controller");

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

const productController = require("./controllers/products.controller");
const userController = require("./controllers/users.controller");
const cartController = require("./controllers/cart.controller");

app.use("/users", userController);
app.use("/products", productController);
app.use("/cart", cartController);

app.post("/register", register);
app.post("/login", login);
app.get("/userdata", getUsers);

app.listen(port, async (req, res) => {
  try {
    await connect();
    console.log(`Server Running On Port ${port}`);
  } catch (er) {
    console.log(er.message);
  }
});
