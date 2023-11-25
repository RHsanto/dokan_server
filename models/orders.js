const mongoose = require("mongoose");

// Create a schema for your data
const ordersSchema = new mongoose.Schema({
  email: String,
  firstName: String,
  lastName: String,
  address: String,
  phone: String,
  altNo: String,
  country: String,
  city: String,
  payment: String,
  date: String,
  orders: Array,
});

// Create a model based on the schema
const Orders = mongoose.model("Orders", ordersSchema);

module.exports = Orders;
