const puppeteer = require("puppeteer");
const generalScraper = require("./generalScraper");
const { FRONTEND_KEYWORDS } = require("../utils/constants");

async function fetchFrontendJobListings() {
  const jobListings = await generalScraper();
  const frontendJobListings = jobListings.filter((listing) => {
    const { jobTitle, details } = listing;
    const jobTitleLower = jobTitle.toLowerCase();
    const detailsLower = details.toLowerCase();
    return FRONTEND_KEYWORDS.some((keyword) => jobTitleLower.includes(keyword) || detailsLower.includes(keyword));
  });
  return frontendJobListings;
}

module.exports = fetchFrontendJobListings;
