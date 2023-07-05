const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new mongoose.Schema({
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
    type: Number,
    default: function() {
        const oneYearFromNow = new Date();
        return oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
    }
  }
}, {
  timestamps: true
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Movie', flightSchema);