const express = require("express");
const router = express.Router();

const { getById } = require("../controllers/car-controller");

router.get("/:id", getById);

module.exports = router;
