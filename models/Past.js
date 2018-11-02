const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PastSchema = new Schema({
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
  }
});

module.exports = Past = mongoose.model("past", PastSchema);
