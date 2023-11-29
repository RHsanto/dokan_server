const express = require("express");
const { getProducts, addProduct, payments } = require("../controllers/ProductsControllers");
const router = express.Router();

// Here Products Route
router.get("/products", getProducts);
router.post("/product", addProduct);
router.post("/create-checkout-session", payments);
router.post("/products/:id", addProduct);

module.exports = router;
