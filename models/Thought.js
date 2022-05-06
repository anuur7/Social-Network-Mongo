const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 128,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        //TODO: getter method to format the timestamp on query
      },
      username: {
        type: String,
        required: true,
      },
      reactions: [reactionSchema],
    },
    {
      toJSON: {
        getters: true,
      },
    }
  );

  //TODO: Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

  const Thought = model("Thought", thoughtSchema);

module.exports = Thought;