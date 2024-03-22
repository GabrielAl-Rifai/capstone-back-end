const mongoose = require("mongoose");

const DaysSchema = new mongoose.Schema({
  day: {
    type: String,
    required: false,
  },
  chef: {
    type: String,
    required: false,
  },
  meal: {
    type: String,
    required: false,
  },
});

module.exports = Days = mongoose.model('days', DaysSchema);
