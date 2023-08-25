const express = require("express");
const router = express.Router();
const { getProducts, addProduct } = require("../controllers/productsControllers");
const { getOrders, addOrder } = require("../controllers/OrdersControllers");

// Here Products Route
router.get("/products", getProducts);
router.post("/products", addProduct);

// Here Orders Route
router.get("/orders", getOrders);
router.post("/orders", addOrder);

module.exports = router;
