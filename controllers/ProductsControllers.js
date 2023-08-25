const Products = require("../models/products");

// Add this func to get all products
const getProducts = async (req, res) => {
  try {
    const { type } = req.query || {};

    let users;
    if (type) {
      users = await Products.find({ type });
    } else {
      users = await Products.find();
    }
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Add this func to post orders
const addProduct = async (req, res) => {
  try {
    const product = new Products(req.body);
    await product.save();
    res.json(product);
    // console.log(product);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getProducts, addProduct };
