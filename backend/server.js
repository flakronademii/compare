const express = require("express");
const app = express();
const cors = require("cors");
const request = require("request");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
const { mongoose } = require("./db.js");

const carRoutes = require("./routes/car");

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
  const data = await fetch("https://myfakeapi.com/api/cars/");
  const json = await data.json();

  res.send(json);
});

app.get("/cars-api", (req, res) => {
  var model = ["audi", "bmw"];
  request.get(
    {
      url: "https://api.api-ninjas.com/v1/cars?make=" + model[0],
      headers: {
        "X-Api-Key": "Xk9ZrclTxcIIogjx6NVPaA==Qxh9QUealtHGwwLI",
      },
    },
    function (error, response, body) {
      if (error) return console.error("Request failed:", error);
      else if (response.statusCode != 200)
        return console.error(
          "Error:",
          response.statusCode,
          body.toString("utf8")
        );
      else console.log(body);
      res.send(body);
    }
  );
});

app.listen(5003, () => {
  console.log("server started at http://localhost:5003");
});
