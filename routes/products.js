const express = require("express");
const { getProducts, addProduct, payments } = require("../controllers/ProductsControllers");
const router = express.Router();

// Here Products Route
router.get("/products", getProducts);
router.post("/products", addProduct);
router.post("/create-checkout-session", payments);

module.exports = router;
