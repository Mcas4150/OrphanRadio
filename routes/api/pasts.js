const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Post model
const Past = require("../../models/Past");
// Profile model

// Validation
const validatePastInput = require("../../validation/past");

// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Pasts Works" }));

// @route   GET api/posts
// @desc    Get posts
// @access  Public
router.get("/", (req, res) => {
  Past.find()

    .then(pasts => res.json(pasts))
    .catch(err => res.status(404).json({ nopastsfound: "No pasts found" }));
});

// @route   GET api/posts/:id
// @desc    Get post by id
// @access  Public
router.get("/:id", (req, res) => {
  Past.findById(req.params.id)
    .then(past => res.json(past))
    .catch(err =>
      res.status(404).json({ nopastfound: "No past found with that ID" })
    );
});

// @route   POST api/posts
// @desc    Create post
// @access  Private
router.post(
  "/",
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePastInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const newPast = new Past({
      name: req.body.name,
      date: req.body.date,
      image: req.body.image
    });

    newPast.save().then(past => res.json(past));
  }
);

// @route   DELETE api/posts/:id
// @desc    Delete post
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Past.findOne({ past: req.user.id }).then(profile => {
      Past.findById(req.params.id)
        .then(past => {
          // Check for post owner
          if (past.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: "User not authorized" });
          }

          // Delete
          past.remove().then(() => res.json({ success: true }));
        })
        .catch(err => res.status(404).json({ pastnotfound: "No past found" }));
    });
  }
);

module.exports = router;
