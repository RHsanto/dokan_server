const express = require("express");
const mongoose = require("mongoose");
const Products = require("./db");
const cors = require("cors");
const app = express();
const port = 8000;
require("dotenv").config();

app.use(cors());
app.use(express.json());
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@mr-travel-app.aqkf7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  )
  .then(() => console.log("database connection successful"))
  .catch(err => console.log(err.message));

// Get all users
app.get("/products", async (req, res) => {
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
});

// Create a user
app.post("/products", async (req, res) => {
  try {
    const newUser = new Products(req.body);
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update a user
app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await Products.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Delete a user
app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Products.findByIdAndDelete(id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
