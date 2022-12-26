const express = require("express");
const app = express();
const cors = require("cors");
const request = require("request");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
const { mongoose } = require("./db.js");
const carRoutes = require("./routes/car");
const Car = require("./models/cars");

app.use(
  cors({
    Access_Control_Allow_Origin: "*",
    origin: "*",
    methode: ["GET", "POST", "PATCH", "DELETE", "PUT"],
    allowedHeaders:
      "Content-Type, Authorization, Origin, X-Requested-With, Accept",
  })
);
app.use(bodyParser.json());

app.get("/get-cars", async (req, res) => {
  const file = require("./cars.json");
  res.send(file);
});

app.get("/all", async (req, res, next) => {
  const file = require("./cars.json");
  res.send(file);
});

app.listen(5003, () => {
  console.log("server started at http://localhost:5003");
});
