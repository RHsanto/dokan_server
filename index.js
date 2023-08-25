const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 8000;
const route = require("./routes/auth");
require("dotenv").config();

app.use(cors());
app.use(express.json());
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@mr-travel-app.aqkf7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  )
  .then(() => console.log("database connection successful"))
  .catch(err => console.log(err.message));

// Here Routs
app.use(route);

app.get("/", (req, res) => {
  res.send("Running the server on Karbar App");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});