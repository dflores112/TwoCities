const fetch = require('node-fetch');
const dbMethods = require('../database/index.js');

async function getLocalPrices(link) {
  const res = await fetch(link);
  const scores = await res.json();
  const result = scores;
  let response;
  result.categories.forEach((category, i) => {
    if (category.id === 'COST-OF-LIVING') {
      response = result.categories[i].data;
    }
  });
  return response.slice(1);
}

function findLocalPrices(req, res) {
  const { cityID } = req.params;
  dbMethods.findCity(cityID, (err, city) => {
    if (err) {
      res.sendStatus(500);
    } else {
      const temp = city[0].name;
      getLocalPrices(city[0].details)
        .then((result) => {
          const data = result.map((category) => category.currency_dollar_value);
          const pricing = [];
          pricing.push({ name: temp, stats: data });
          return pricing;
        })
        .then((result) => res.status(200).send(result))
        .catch((er) => console.log(er));
    }
  });
}

module.exports = { findLocalPrices };
