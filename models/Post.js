const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  content: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  name: {
    type: String,
  },
  likes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    },
  ],
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
      content: {
        type: String,
        required: true,
      },
      avatar: {
        type: String,
      },
      name: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

module.exports = Post = mongoose.model("post", PostSchema);
