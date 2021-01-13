const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/d3TwoCities', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const citySchema = new mongoose.Schema({
  name: String,
  housing: Number,
  startups: Number,
  transportation: Number,
  economy: Number,
  costOfLiving: Number,
  education: Number,
  safety: Number,
});

const City = mongoose.model('City', citySchema);

function addCity(city) {
  const location = new City({
    name: city.name,
    housing: city.housing,
    startups: city.startups,
    transportation: city.transportation,
    economy: city.economy,
    costOfLiving: city.costOfLiving,
    education: city.education,
    safety: city.safety,
    overall: city.overall,
  });

  location.save((err) => {
    if (err) {
      console.log(err);
    }
  });
}


module.exports.addCity = addCity
