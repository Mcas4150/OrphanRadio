const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ArchiveSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  tracklist: {
    type: String
  },
  mix: {
    type: String
  }
});

module.exports = Archive = mongoose.model("archive", ArchiveSchema);
