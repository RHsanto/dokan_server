const express = require("express");
const { addUsers, getAllUser } = require("../controllers/UserControllers");

const router = express.Router();

// Here Users Route

router.get("/user", getAllUser);
router.post("/users", addUsers);

module.exports = router;
