const puppeteer = require("puppeteer");
const { MAX_PAGES, CATHO_URL } = require("../utils/constants");

async function fetchJobListings() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  let currentPage = 1;
  const jobListings = [];

  while (currentPage <= MAX_PAGES) {
    const url = `${CATHO_URL}?page=${currentPage}`;
    await page.goto(url, { waitUntil: "networkidle2" });

    const listingsOnPage = await page.evaluate(() => {
      const listings = [];
      document
        .querySelectorAll("article.Card__CardWrapper-sc-om5cci-0")
        .forEach((jobElement) => {
          const jobTitleElement = jobElement.querySelector("h2 a");
          const jobTitle = jobTitleElement
            ? jobTitleElement.innerText
            : "Título não encontrado";

          const companyElement = jobElement.querySelector("p.sc-EgOXT");
          const company = companyElement
            ? companyElement.innerText
            : "Empresa não informada";

          const detailsElement = jobElement.querySelector(
            "div.Content-sc-6vzg5x-0"
          );
          const details = detailsElement
            ? detailsElement.innerText
            : "Detalhes não encontrados";

          const salaryElement = jobElement.querySelector(
            "div.sc-kFWlue.duZLfF"
          );
          const salary = salaryElement
            ? salaryElement.innerText
            : "Salário não informado";

          const linkElement = jobElement.querySelector("h2 a");
          const jobLink = linkElement ? linkElement.href : null;

          if (jobLink) {
            listings.push({ jobTitle, company, details, salary, jobLink });
          }
        });
      return listings;
    });

    jobListings.push(...listingsOnPage);
    currentPage++;
  }

  await browser.close();
  return jobListings;
}

module.exports = fetchJobListings;
