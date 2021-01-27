const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const dbMethods = require('../database/index.js');

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('/api/cities/:cityId', (req, res) => {
console.log(req.params);
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
