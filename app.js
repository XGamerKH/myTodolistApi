const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

//route
const router = require("./routes/placeholder.js");

const app = express();

//just some bodyparser that i dont fully understand yet
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//use routes
app.use("/api/list", router);

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(port, () => console.log("server started")))
  .catch((err) => console.error(err));
