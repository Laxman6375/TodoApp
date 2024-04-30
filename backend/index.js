const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();
const routes = require("./routes/todoRoutes")

const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('MOngo db Connected');
}).catch((err) => {
    console.log('err',err);
});

app.use("/api", routes);

app.listen(PORT, (req, res) => {
  console.log("listening at", PORT);
});

