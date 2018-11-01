const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Post model
const Release = require("../../models/Release");
// Profile model

// Validation
const validateReleaseInput = require("../../validation/release");

// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Release Works" }));

// @route   GET api/posts
// @desc    Get posts
// @access  Public
router.get("/", (req, res) => {
  Release.find()

    .then(releases => res.json(releases))
    .catch(err =>
      res.status(404).json({ noreleasesfound: "No releases found" })
    );
});

// @route   GET api/posts/:id
// @desc    Get post by id
// @access  Public
router.get("/:id", (req, res) => {
  Release.findById(req.params.id)
    .then(release => res.json(release))
    .catch(err =>
      res.status(404).json({ noreleasefound: "No release found with that ID" })
    );
});

// @route   POST api/posts
// @desc    Create post
// @access  Private
router.post(
  "/",
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateReleaseInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const newRelease = new Release({
      artist: req.body.artist,
      title: req.body.title,
      image: req.body.image,
      listenLink: req.body.listenLink,
      buyLink: req.body.buyLink,
      date: req.body.date
    });

    newRelease.save().then(release => res.json(release));
  }
);

// @route   DELETE api/posts/:id
// @desc    Delete post
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Release.findOne({ release: req.user.id }).then(profile => {
      Release.findById(req.params.id)
        .then(release => {
          // Check for post owner
          if (release.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: "User not authorized" });
          }

          // Delete
          release.remove().then(() => res.json({ success: true }));
        })
        .catch(err =>
          res.status(404).json({ releasenotfound: "No release found" })
        );
    });
  }
);

module.exports = router;
