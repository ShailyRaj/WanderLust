const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const listingController = require("../controllers/listings.js");

router.get("/:category", wrapAsync(listingController.showFilterListings));

module.exports = router;
