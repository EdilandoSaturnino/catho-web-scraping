const generalScraper = require("../scrapers/generalScraper");
const frontendScraper = require("../scrapers/frontendScraper");

async function fetchGeneralJobListings() {
  return await generalScraper();
}

async function fetchFrontendJobListings() {
  return await frontendScraper();
}

module.exports = {
  fetchGeneralJobListings,
  fetchFrontendJobListings,
};
