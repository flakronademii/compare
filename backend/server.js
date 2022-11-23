const express = require("express");
const app = express();
const cors = require("cors");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
const { mongoose } = require("./db.js");

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
  const data = await fetch("https://myfakeapi.com/api/cars/");
  const json = await data.json();

  res.send(json);
});

app.listen(5003, () => {
  console.log("server started at http://localhost:5003");
});
