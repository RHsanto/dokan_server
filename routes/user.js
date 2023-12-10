const express = require("express");
const {
  getAllUser,
  getSingleUser,
  addOrUpdateUser,
  editUserInfo,
} = require("../controllers/UserControllers");

const router = express.Router();

// Here Users Route

router.get("/user", getAllUser);
router.get("/user/:email", getSingleUser);
router.post("/add-users", addOrUpdateUser);
router.post("/edit-user/:email", editUserInfo);

module.exports = router;
