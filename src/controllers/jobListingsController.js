const jobListingsService = require("../services/jobListingsService");

async function fetchJobListings(req, res) {
  try {
    const jobListings = await jobListingsService.fetchGeneralJobListings();
    res.json(jobListings);
  } catch (error) {
    res.status(500).send("erro ao buscar vagas");
  }
}

async function fetchFrontendJobListings(req, res) {
  try {
    const jobListings = await jobListingsService.fetchFrontendJobListings();
    res.json(jobListings);
  } catch (error) {
    res.status(500).send("erro ao buscar vagas");
  }
}

module.exports = {
  fetchJobListings,
  fetchFrontendJobListings,
};
