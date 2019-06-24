require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const users = require("./routes/api/users");
const artists = require("./routes/api/artists");
const releases = require("./routes/api/releases");
const formData = require("express-form-data");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(formData.parse());

// DB Config


// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Use Routes
// app.use("/api/users", users);
app.use("/api/artists", artists);
app.use("/api/releases", releases);

// Server statis assets if in production
if (process.env.NODE_ENV === "production") {
  // Set Static folder
  app.use(express.static(path.resolve(__dirname + "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
// Connect to MongoDB
const db = require("./config/keys").mongoURI;

mongoose
  .connect("mongodb://mcas4150:Leafpad4@ds151612.mlab.com:51612/orphan", {
    useNewUrlParser: true
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.listen(port, () => console.log(`Server running on port ${port}`));
