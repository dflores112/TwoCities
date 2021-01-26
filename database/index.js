const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/d3TwoCities', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const citySchema = mongoose.Schema({
  name: String,
  overall: Number,
  link: String,
});

const City = mongoose.model('City', citySchema);

function addCity(city) {
  const location = new City({
    name: city.name,
    link: city.link,
    overall: city.overall,
  });
  location.save((err) => {
    if (err) {
      console.log(err);
    }
  });
}

function selectAllCities(callback) {
  City.find({}, (err, cities) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, cities);
    }
  });
}

const drop = () => {
  db.dropDatabase();
};

module.exports.addCity = addCity;
module.exports.selectAllCities = selectAllCities;
module.exports.drop = drop;
