const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  bio: { type: String },
  social: {
    linkedIn: { type: String },
    instagram: { type: String },
    vimeo: { type: String },
    behance: { type: String },
  },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
