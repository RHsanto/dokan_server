const mongoose = require("mongoose");

// Create a schema for product data
const productsSchema = new mongoose.Schema({
  productImg: String,
  name: String,
  description: String,
  message: String,
  reviews: String,
  star: String,
  price: Number,
  color: String,
  category: String,
  quantity: Number,
  size: String,
  type: {
    type: String,
    enum: ["women", "man", "kids", "sport", "beauty"],
  },
});

// Create a model based on the schema
const Products = mongoose.model("Products", productsSchema);

module.exports = Products;
