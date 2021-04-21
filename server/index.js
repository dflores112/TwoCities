const express = require('express');
const axios = require('axios');

const app = express();
const port = 80;
const path = require('path');
const dbMethods = require('../database/index.js');

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('/api/cities/:cityId', (req, res) => {
  const { cityId } = req.params;
  dbMethods.findCity(cityId, (err, city) => {
    if (err) {
      res.sendStatus(500);
    } else {
      const { link, name } = city[0];
      const scores = {};
      scores['name'] = name;
      scores['stats'] = [];
      axios.get(link)
        .then((response) => response.data.categories.forEach((category) => scores['stats'].push(category.score_out_of_10)))
        .then(() => res.status(200).send(scores))
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
