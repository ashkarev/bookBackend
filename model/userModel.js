const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  bioDescription: {
    type: String,
    default: "",
  },
  proPic: {
    type: String,
    default: "",
  },
  userType: {
    type: String,
    default: "user",
  },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
