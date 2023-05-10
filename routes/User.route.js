const express = require("express");
const { UserModel } = require("../model/user.model");
const userRouter = express.Router();

// get all users

userRouter.get("/users", async (req, res) => {
  const user = await UserModel.find();
  if (user) {
    res.status(200).send({ msg: "user found", user });
  } else {
    res.status(404).send({ msg: "user not found" });
  }
});

// get id users

userRouter.get("/users/:id", async (req, res) => {
  const id = req.params.id;

  const user = await UserModel.findOne({ _id: id });
  if (user) {
    res.status(200).send({ msg: "user found", user });
  } else {
    res.status(400).send({ msg: "user not found" });
  }
});

// create a new user

userRouter.post("/users", async (req, res) => {
  const { username, age, hobbies } = req.body;
  try {
    const user = new UserModel({ username, age, hobbies });
    await user.save();
    res.status(201).send({ msg: "user created successful" });
  } catch (e) {
    res.status(400).send({ msg: "user created failed", error: e.message });
  }
});

// update id users

userRouter.put("/users/:id", async (req, res) => {
  const id = req.params.id;
  const updatedUser = await UserModel.findOne({ _id: id });

  try {
    await UserModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({ msg: "user updated successfully", updatedUser });
  } catch (e) {
    res.status(404).send("Something went wrong  ");
  }
});

// delete id users

userRouter.delete("/users/:id", async (req, res) => {
  const id = req.params.id;
  const deletedUser = await UserModel.findOne({ _id: id });

  try {
    await UserModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ msg: "user deleted successfully", deletedUser });
  } catch (e) {
    res.send("Something went wrong  ");
  }
});
module.exports = { userRouter };
