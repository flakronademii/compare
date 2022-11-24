const express = require("express");
const { async } = require("rxjs");

module.exports = {
  getById: async (req, res) => {
    console.log(req.params);
    res.send(req.params);
  },
};
