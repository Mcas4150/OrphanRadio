const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Post model
const Archive = require("../../models/Archive");
// Profile model

// Validation
const validateArchiveInput = require("../../validation/archive");

// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Archive Works" }));

// @route   GET api/posts
// @desc    Get posts
// @access  Public
router.get("/", (req, res) => {
  Archive.find()

    .then(archives => res.json(archives))
    .catch(err =>
      res.status(404).json({ noarchivesfound: "No archives found" })
    );
});

// @route   GET api/posts/:id
// @desc    Get post by id
// @access  Public
router.get("/:id", (req, res) => {
  Archive.findById(req.params.id)
    .then(archive => res.json(archive))
    .catch(err =>
      res.status(404).json({ noarchivefound: "No archive found with that ID" })
    );
});

// @route   POST api/posts
// @desc    Create post
// @access  Private
router.post(
  "/",
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateArchiveInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const newArchive = new Archive({
      name: req.body.name,
      date: req.body.date,
      mix: req.body.mix,
      tracklist: req.body.tracklist
    });

    newArchive.save().then(archive => res.json(archive));
  }
);

// @route   DELETE api/posts/:id
// @desc    Delete post
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Archive.findOne({ archive: req.user.id }).then(profile => {
      Archive.findById(req.params.id)
        .then(archive => {
          // Check for post owner
          if (archive.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: "User not authorized" });
          }

          // Delete
          archive.remove().then(() => res.json({ success: true }));
        })
        .catch(err =>
          res.status(404).json({ archivenotfound: "No archive found" })
        );
    });
  }
);

module.exports = router;
