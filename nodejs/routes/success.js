const path = require("path");

const express = require("express");

const successController = require("../controllers/contact");

const router = express.Router();

router.get("/contactUs/success", successController.success);

module.exports = router;
