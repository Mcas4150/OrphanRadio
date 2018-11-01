const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UpcomingSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  image: {
    type: String
  },
  tickets: {
    type: String
  }
});

module.exports = Upcoming = mongoose.model("upcoming", UpcomingSchema);
