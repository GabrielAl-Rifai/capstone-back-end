const mongoose = require("mongoose");

const DaysSchema = new mongoose.Schema({
  dayOfWeek: {
    type: String,
    required: false,
  },
  userID: {
    type: String,
    required: false,
  },
  mealID: {
    type: String,
    required: false,
  },
  scheduleID: {
    type: String,
    required: false,
  },
});

module.exports = Days = mongoose.model('days', DaysSchema);
