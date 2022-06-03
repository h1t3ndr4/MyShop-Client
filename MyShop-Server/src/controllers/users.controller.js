const express = require("express");
const router = express.Router();

const User = require("../models/users.model");

router.get("/", async (req, res) => {
  try {
    const Users = await User.find().lean().exec();
    return res.status(200).send(Users);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const Users = await User.create(req.body);
    return res.status(200).send(Users);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/:id/", async (req, res) => {
  try {
    const Users = await User.findById(req.params.id).lean().exec();
    return res.status(200).send(Users);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.patch("/:id/", async (req, res) => {
  try {
    const Users = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).send(Users);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.delete("/:id/", async (req, res) => {
  try {
    const Users = await User.findByIdAndDelete(req.params.id);
    return res.status(200).send(Users);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
