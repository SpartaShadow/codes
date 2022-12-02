const path = require("path");

const express = require("express");

const contactUsController = require("../controllers/contact");

const router = express.Router();

router.get("/contactUs", contactUsController.getInTouch);

router.post("/contactUs", contactUsController.redirecting);

module.exports = router;
