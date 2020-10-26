const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  createdAt: String,
  firstname: String,
  lastname: String,
});

module.exports = model("User", userSchema);
