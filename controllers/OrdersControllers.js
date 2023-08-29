const Orders = require("../models/orders");

// Add this func to get orders
const getOrders = async (req, res) => {
  try {
    const orders = await Orders.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Internal server error getOrders" });
  }
};

// Add this func to post orders
const addOrder = async (req, res) => {
  try {
    const order = new Orders(req.body);
    await order.save();
    res.json(order);
    // console.log(order);
  } catch (error) {
    res.status(500).json({ error: "Internal server error addOrder" });
  }
};

module.exports = { getOrders, addOrder };
