const express = require("express");
const configureExpress = require("./config/expressConfig");
const jobListingsRoutes = require("./src/routes/jobListingsRoutes");

const app = express();
const port = 3000;

configureExpress(app);

app.use("/api", jobListingsRoutes);

app.listen(port, () => {
console.log(`servidor rodando em http://localhost:${port}`);
});

