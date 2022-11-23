const express = require("express");
const { async } = require("rxjs");

module.exports = {
  getById: async (req, res) => {
    res.send(req.params);
  },
};
