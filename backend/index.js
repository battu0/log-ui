const allCountries = require("country-region-data/data.json");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3000;
import 

function getRegions(allCountries, countryCode) {
  // for (let i = 0; i < allCountries.length; i++) {
  //   if (allCountries[i].countryShortCode === countryCode) {
  //     return allCountries[i].regions;
  //   }
  // }
  return allCountries.find(
    (country) => country.countryShortCode === countryCode
  ).regions;
}

app.listen(port, () => {
  console.log(`started listening on ${port}`);
});

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("success");
});

app.get("/city", (req, res) => {
  res.send("success");
});

app.post("/city", (req, res) => {
  const { countryCode } = req.body;
  res.send(getRegions(allCountries, countryCode));
});
