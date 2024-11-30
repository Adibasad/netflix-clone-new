const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  uname: String,
  email: String,
  password: String,
});

const UseModel = mongoose.model("users", UserSchema);
module.exports = UseModel;
