const Users = require("../models/user");

// Get all users
const getAllUser = async (req, res) => {
  try {
    const allUser = await Users.find();
    res.json(allUser);
  } catch (error) {
    res.status(500).json({ error: "Internal server error addOrder" });
  }
};

// Add all user info
const addUsers = async (req, res) => {
  try {
    const user = new Users(req.body);
    await user.save();
    res.json(user);
    // console.log(user);
  } catch (error) {
    res.status(500).json({ error: "Internal server error addOrder" });
  }
};

module.exports = { getAllUser, addUsers };
