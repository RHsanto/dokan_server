const Orders = require("../models/orders");
const ObjectId = require("mongodb").ObjectId;

// Add this func to get orders
const getOrders = async (req, res) => {
  try {
    const orders = await Orders.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Internal server error getOrders" });
  }
};
// Add this func to get single orders
const getSingleOrders = async (req, res) => {
  try {
    const orderId = req.params.id;
    const result = await Orders.findOne({ _id: orderId });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal server error single Order" });
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

//  Delete Order
const deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const result = await Orders.deleteOne({ _id: orderId });

    if (result.deletedCount === 1) {
      res.json({ message: "Order deleted successfully" });
    } else {
      res.status(404).json({ error: "Order not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error deleting order" });
  }
};

module.exports = { getOrders, addOrder, deleteOrder, getSingleOrders };
