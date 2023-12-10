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

// Add or update user info
const addOrUpdateUser = async (req, res) => {
  try {
    const user = req.body;
    const existingUser = await Users.findOne({ email: user.email });
    if (existingUser?.email) return;
    else {
      // User doesn't exist, add the new user
      const result = await Users.updateOne({ email: user.email }, { $set: user }, { upsert: true });
      res.json(result);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error addOrUpdateUser" });
  }
};
// Add this func to get single user
const getSingleUser = async (req, res) => {
  try {
    const result = await Users.findOne({ email: req.params.email });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal server error single user" });
  }
};

// user info edit
const editUserInfo = async (req, res) => {
  try {
    const { email } = req.params || "";
    if (!email) return res.status(400).json({ message: "User not found" });

    const user = await Users.findOne({ email });
    if (!user || !user._id) return res.status(400).json({ msg: "User not found" });

    const updateData = { ...req.body };
    const results = await Users.updateOne({ email }, { $set: updateData });

    res.status(results.acknowledged ? 200 : 400).json({ success: results.acknowledged });
  } catch (error) {
    console.error("Error in editUserInfo:", error);
    res
      .status(500)
      .json({ success: false, error: "Internal server error", details: error.message });
  }
};

module.exports = {
  getAllUser,
  addOrUpdateUser,
  getSingleUser,
  editUserInfo,
};
