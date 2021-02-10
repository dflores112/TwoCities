const axios = require('axios');
const fetch = require('node-fetch');
const db = require('./index.js');

db.drop();

async function getOverall(storage) {
  const clone = { ...storage };
  const links = Object.values(storage);
  const cityNames = Object.keys(storage);
  for (let i = 0; i < links.length; i++) {
    const res = await fetch(links[i].link);
    const data = await res.json();
    clone[cityNames[i]].overall = data.teleport_city_score;
  }
  for (let j = 0; j < cityNames.length; j++) {
    db.addCity(clone[cityNames[j]]);
  }
}

async function getCityScores() {
  const cities = {};
  axios.get('https://api.teleport.org/api/urban_areas/')
    .then((res) => res.data._links['ua:item'].forEach((city) => cities[city.name] = { link: city.href.concat('scores'), name: city.name }))
    .then(() => getOverall(db))
    .then(() => console.log('Completed Seed'))
    .catch((err) => console.log(err));
}

getCityScores();
