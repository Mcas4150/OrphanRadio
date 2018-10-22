const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ResidentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  website: {
    type: String
  },
  instagram: {
    type: String
  },
  twitter: {
    type: String
  }
});

module.exports = Resident = mongoose.model("resident", ResidentSchema);
