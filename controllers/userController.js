// const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require("../models");

const userController = {
  getAllUsers(req, res) {
    User.find()
      .select("-__v")
      .then((allUsers) => {
        res.json(allUsers);
      })
      .catch((err) => {
        console.log(`ERROR: Failed to get all users | ${err.message}`);
        res.status(500).json(err);
      });
  },

  getOneUser(req, res) {
    User.findOne({ _id: req.params.id })
      .select("-__v")
      .populate("friends")
      .populate("thoughts")
      .then((oneUser) => {
        if (!oneUser) {
          return res
            .status(404)
            .json({ message: "No user was found with this ID" });
        }
        res.json(oneUser);
      })
      .catch((err) => {
        console.log(`ERROR: Failed to get one user | ${err.message}`);
        res.status(500).json(err);
      });
  },

  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json({ message: "User has been created" }, user))
      .catch((err) =>
        res.status(500).json({ message: "Failed to create user", err })
      );
  },

  deleteOneUser(req, res) {
    User.findOneAndDelete({ _id: req.params.id })
      .select("-__v")
      .then((deleteUser) => {
        if (!deleteUser) {
          return res
            .status(404)
            .json({ message: "No user was found with this ID" });
        }
        res.json({ message: `User has been deleted` });
      })
      .catch((err) => {
        console.log(`ERROR: Failed to delete user | ${err.message}`);
        res.status(500).json(err);
      });
  },

  updateOneUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .select("-_v")
      .then((updateUser) => {
        if (!updateUser) {
          return res
            .status(404)
            .json({ message: "No user found with this ID" });
        }
        res.json({ message: "User has been updated" });
      })
      .catch((err) => {
        console.log(`ERROR: Failed to update user | ${err.message}`);
        res.status(500).json(err);
      });
  },
};

module.exports = userController;
