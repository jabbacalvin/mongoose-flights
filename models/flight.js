const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'IAH', 'HKG']
  },
  arrival: {
    type: Date
  }
});

const flightSchema = new Schema({
  airline: { type: String, required: true },
  airport: {
    type: String,
    default: 'IAH',
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'IAH', 'HKG']
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date,
    default: function() {
        const oneYearFromNow = new Date();
        return oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
    }
  },
  destinations: [destinationSchema]
}, {
  timestamps: true
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);