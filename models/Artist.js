const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ArtistSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  image: {
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

module.exports = Artist = mongoose.model("artist", ArtistSchema);
