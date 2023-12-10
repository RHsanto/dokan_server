const mongoose = require("mongoose");

// Create a schema for your data
const userSchema = new mongoose.Schema({
  email: String,
  displayName: String,
  role: String,
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  phoneNo: { type: String, required: false },
  alternativeNo: { type: String, required: false },
  country: { type: String, required: false },
  city: { type: String, required: false },
  address: { type: String, required: false },
  gender: { type: String, required: false },
  imageLink: { type: String, required: false },
});

// Create a model based on the schema
const Users = mongoose.model("Users", userSchema);

module.exports = Users;
