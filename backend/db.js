const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/crud", (err) => {
  if (!err) {
    console.log("database connected successfully");
  } else {
    console.log(
      "database connected successfully" + JSON.stringify(err, undefined, 2)
    );
  }
});

module.exports = mongoose;
