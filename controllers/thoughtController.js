const { User, Thought, Types } = require("../models");

const thoughtController = {
  getAllThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  getThoughtById(req, res) {
    Thought.findOne({ _id: req.params.id })
      .select("-__v")
      .then((thoughts) => {
        if (!thoughts) {
          return res.status(404).json({ message: "No thought was found with this ID" });
        }
        res.json(thoughts);
      })
      .catch((err) => {
        console.log(`ERROR: Failed to get one thought! | ${err.message}`);
        res.status(500).json(err);
      });
  },

  createNewThought(req, res) {
    Thought.create(req.body)
      .then((thoughts) => res.json({message: "Created a new thought!", thoughts}))
      .catch((err) => {
        console.log((`ERROR: Failed to create a new thought! | ${err.message}`));
        res.status(500).json({message:"Failed to create a new thought!", err});
      });
  },

  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.id })
      .then((thoughts) => {
        if (!thoughts) {
          return res.status(404).json({ message: "No thought was found with this ID" });
        }
        res.json(thoughts);
      })
      .catch((err) => {
        console.log(`ERROR: Failed to delete thought! | ${err.message}`);
        res.status(500).json({message:"Failed to delete thought!", err});
      })
  },
};

module.exports = thoughtController;
