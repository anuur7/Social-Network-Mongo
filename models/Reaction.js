const { Schema, Types } = require("mongoose");
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: new Schema.Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

  //TODO: This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.


module.exports = reactionSchema;