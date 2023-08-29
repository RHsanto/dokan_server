const express = require("express");
const { getOrders, addOrder } = require("../controllers/OrdersControllers");
const router = express.Router();

// Here Orders Route
router.get("/orders", getOrders);
router.post("/orders", addOrder);

module.exports = router;
