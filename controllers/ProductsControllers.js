const Products = require("../models/products");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

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
    res.status(500).json({ error: "Internal server error getProducts" });
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
    res.status(500).json({ error: "Internal server error addProduct" });
  }
};

// Add stripe payment system
const payments = async (req, res) => {
  // get cartItems
  const line_items = req.body.cartItems.map(item => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          images: [item.productImg],
          description: item.description,
          metadata: {
            id: item._id,
          },
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    };
  });
  const session = await stripe.checkout.sessions.create({
    // add shipping & tax fee
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 8600,
            currency: "usd",
          },
          display_name: "& Tax",
        },
      },
    ],
    line_items,
    mode: "payment",
    success_url: "https://karbar.vercel.app/checkout-success",
    cancel_url: "https://karbar.vercel.app/checkout-cancel",
  });

  res.send({ url: session.url });
};

module.exports = { getProducts, addProduct, payments };
