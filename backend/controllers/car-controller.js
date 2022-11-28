const express = require("express");

module.exports = {
  getById: async (req, res) => {
    console.log(req.params);
    res.send(req.params);
  },
};
