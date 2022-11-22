const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("test");
});

app.listen(5003, () => {
  console.log("server started at http://localhost:5003");
});
