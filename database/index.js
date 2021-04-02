const mongoose = require('mongoose');

// mongoose.connect('mongodb://172.17.0.3:27017/CityScoresDB', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connect('mongodb://localhost/CityScoresDB', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.once('open', () => {
  console.log('connected');
});
db.on('error', console.error.bind(console, 'connection error:'));

const citySchema = mongoose.Schema({
  name: String,
  overall: Number,
  link: String,
  housing: Number,
  costOfLiving: Number,
  startups: Number,
  ventureCapital: Number,
  travelConnectivity: Number,
  commute: Number,
  businessFreedom: Number,
  safety: Number,
  healthcare: Number,
  education: Number,
  enviromentalQuality: Number,
  economy: Number,
  taxation: Number,
  internetAccess: Number,
  leisureAndCulture: Number,
  tolerance: Number,
  outdoors: Number,
  details: String,
});

const City = mongoose.model('City', citySchema);
const { ObjectId } = require('mongodb');

function addCity(city) {
  const location = new City({
    name: city.name,
    link: city.link,
    overall: city.overall,
    housing: city.Housing,
    costOfLiving: city['Cost of Living'],
    startups: city.Startups,
    ventureCapital: city['Venture Capital'],
    travelConnectivity: city['Travel Connectivity'],
    commute: city.Commute,
    businessFreedom: city['Business Freedom'],
    safety: city.Safety,
    healthcare: city.Healthcare,
    education: city.Education,
    enviromentalQuality: city['Environmental Quality'],
    economy: city.Economy,
    taxation: city.Taxation,
    internetAccess: city['Internet Access'],
    leisureAndCulture: city['Leisure & Culture'],
    tolerance: city.Tolerance,
    outdoors: city.Outdoors,
    details: city.details,
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
