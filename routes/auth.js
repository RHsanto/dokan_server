const express = require("express");
const { getProducts, addProduct } = require("../controllers/productsControllers");
const { getOrders, addOrder } = require("../controllers/OrdersControllers");
const router = express.Router();

// Here Products Route
router.get("/products", getProducts);
router.post("/products", addProduct);

// Here Orders Route
router.get("/orders", getOrders);
router.post("/orders", addOrder);

module.exports = router;
