const express = require("express");
const {
  getOrders,
  addOrder,
  deleteOrder,
  getSingleOrders,
} = require("../controllers/OrdersControllers");
const router = express.Router();

// Here Orders Route
router.get("/orders", getOrders);
router.get("/singleOrder/:id", getSingleOrders);
router.post("/addOrders", addOrder);
router.delete("/orderDelete/:id", deleteOrder);

module.exports = router;
