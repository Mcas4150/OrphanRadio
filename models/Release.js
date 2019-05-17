const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ReleaseSchema = new Schema({
  artist: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  listenLink: {
    type: String
  },
  catalog:{
    type: String
  },
  buyLink: {
    type: String
  },
  date: {
    type: Date
  }
});

module.exports = Release = mongoose.model("release", ReleaseSchema);
