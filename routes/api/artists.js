const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Post model
const Artist = require("../../models/Artist");
// Profile model

// Validation
const validateArtistInput = require("../../validation/artist");

// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Artists Works" }));

// @route   GET api/posts
// @desc    Get posts
// @access  Public
router.get("/", (req, res) => {
  Artist.find()

    .then(artists => res.json(artists))
    .catch(err => res.status(404).json({ noartistsfound: "No artists found" }));
});

// @route   GET api/posts/:id
// @desc    Get post by id
// @access  Public
router.get("/:id", (req, res) => {
  Artist.findById(req.params.id)
    .then(artist => res.json(artist))
    .catch(err =>
      res.status(404).json({ noartistfound: "No artist found with that ID" })
    );
});

// @route   POST api/posts
// @desc    Create post
// @access  Private
router.post(
  "/",
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateArtistInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const newArtist = new Artist({
      name: req.body.name,
      bio: req.body.bio,
      image: req.body.image,
      website: req.body.website,
      instagram: req.body.instagram,
      twitter: req.body.twitter
    });

    newArtist.save().then(artist => res.json(artist));
  }
);

// @route   DELETE api/posts/:id
// @desc    Delete post
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Artist.findOne({ artist: req.user.id }).then(profile => {
      Artist.findById(req.params.id)
        .then(artist => {
          // Check for post owner
          if (artist.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: "User not authorized" });
          }

          // Delete
          artist.remove().then(() => res.json({ success: true }));
        })
        .catch(err =>
          res.status(404).json({ artistnotfound: "No artist found" })
        );
    });
  }
);

module.exports = router;
