const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const listingController = require("../controllers/listings.js");

router.get("/:location", wrapAsync(listingController.showSearchListings));  

module.exports = router;
