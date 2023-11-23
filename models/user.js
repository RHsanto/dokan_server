const mongoose = require("mongoose");

// Create a schema for your data
const userSchema = new mongoose.Schema({
  email: String,
  displayName: String,
  role: String,
});

// Create a model based on the schema
const Users = mongoose.model("Users", userSchema);

module.exports = Users;
