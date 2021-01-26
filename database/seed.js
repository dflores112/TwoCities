const axios = require('axios');
const db = require('./index.js');

db.drop();

function getCityScores() {
  axios.get('https://api.teleport.org/api/urban_areas/')
    .then((res) => res.data._links['ua:item'].forEach((city) => {
      const cityData = {};
      cityData.name = city.name;
      cityData.link = city.href.concat('scores');
      axios.get(cityData.link)
        .then((res) => cityData.overall = res.data.teleport_city_score)
        .then(() => db.addCity(cityData))
        .catch((err) => console.log(err));
    }))
    .then(() => console.log('Seeding Complete'))
    .catch((err) => console.log(err));
}

getCityScores();
