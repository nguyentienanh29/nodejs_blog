const express = require("express");
const router = express.Router();

const siteController = require("../app/controllers/SiteController");

router.use("/search", siteController.search);
//router.use("/:splug", siteController.home);
router.use("/", siteController.home);

module.exports = router;
