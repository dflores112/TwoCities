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
const { ObjectId } = require('mongodb');

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

function findCity(id, callback) {
  City.find({ _id: new ObjectId(id) }, (err, city) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, city);
    }
  });
}

const drop = () => {
  db.dropDatabase();
};

module.exports.addCity = addCity;
module.exports.selectAllCities = selectAllCities;
module.exports.drop = drop;
module.exports.findCity = findCity;
