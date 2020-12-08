import mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  Login: String,
  Password: String,
});

module.exports = mongoose.model("User", UserSchema);
