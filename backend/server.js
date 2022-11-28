const express = require("express");
const app = express();
const cors = require("cors");
const request = require("request");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
const { mongoose } = require("./db.js");
const axios = require("axios");
const carRoutes = require("./routes/car");
const fs = require("fs");
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

app.use("/car", carRoutes);

app.get("/get-cars", async (req, res) => {
  // const data = await fetch("https://myfakeapi.com/api/cars/");
  // const json = await data.json();

  // res.send(json);

  const file = require("./cars.json");
  console.log(file);
  res.send(file);
});

app.post("/register-cars", async (req, res) => {
  console.log(req.body);
  const newCar = new Car(req.body);
  const savedCar = await newCar.save();
  console.log({ savedCar });
});

app.get("/all", async (req, res) => {
  const file = require("./cars.json");
  console.log(file);
  res.send(file);
});

app.listen(5003, () => {
  console.log("server started at http://localhost:5003");
});
