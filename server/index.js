const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;
const path = require('path');
const dbMethods = require('../database/index.js');

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('/api/cities/:cityId', (req, res) => {
  const { cityId } = req.params;

  dbMethods.findCity(cityId, (err, city) => {
    if (err) {
      res.sendStatus(500);
    } else {
      const { link } = city[0];
      axios.get(link)
        .then((response) => res.send(response.data.categories))
        .catch(() => res.sendStatus(500));
    }
  });
});

app.get('/scores', (req, res) => {
  dbMethods.selectAllCities((err, cities) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(cities);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
