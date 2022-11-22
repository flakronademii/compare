const express = require("express");
const app = express();
const cors = require("cors");
const fetch = require("node-fetch");

app.use(cors());

app.get("/get-cars", async (req, res) => {
  const data = await fetch("https://myfakeapi.com/api/cars/");
  const json = await data.json();

  res.send(json);
});

app.listen(5003, () => {
  console.log("server started at http://localhost:5003");
});
