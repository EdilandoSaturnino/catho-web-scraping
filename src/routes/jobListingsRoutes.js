const express = require("express");
const jobListingsController = require("../controllers/jobListingsController");

const router = express.Router();

router.get("/vagas", jobListingsController.fetchJobListings);

router.get("/vagas/frontend", jobListingsController.fetchFrontendJobListings);

module.exports = router;
