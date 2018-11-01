const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Post model
const Upcoming = require("../../models/Upcoming");
// Profile model

// Validation
const validateUpcomingInput = require("../../validation/upcoming");

// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Upcomings Works" }));

// @route   GET api/posts
// @desc    Get posts
// @access  Public
router.get("/", (req, res) => {
  Upcoming.find()

    .then(upcomings => res.json(upcomings))
    .catch(err =>
      res.status(404).json({ noupcomingsfound: "No upcomings found" })
    );
});

// @route   GET api/posts/:id
// @desc    Get post by id
// @access  Public
router.get("/:id", (req, res) => {
  Upcoming.findById(req.params.id)
    .then(upcoming => res.json(upcoming))
    .catch(err =>
      res
        .status(404)
        .json({ noupcomingfound: "No upcoming found with that ID" })
    );
});

// @route   POST api/posts
// @desc    Create post
// @access  Private
router.post(
  "/",
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateUpcomingInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const newUpcoming = new Upcoming({
      name: req.body.name,
      date: req.body.date,
      image: req.body.image,
      tickets: req.body.tickets
    });

    newUpcoming.save().then(upcoming => res.json(upcoming));
  }
);

// @route   DELETE api/posts/:id
// @desc    Delete post
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Upcoming.findOne({ upcoming: req.user.id }).then(profile => {
      Upcoming.findById(req.params.id)
        .then(upcoming => {
          // Check for post owner
          if (upcoming.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: "User not authorized" });
          }

          // Delete
          upcoming.remove().then(() => res.json({ success: true }));
        })
        .catch(err =>
          res.status(404).json({ upcomingnotfound: "No upcoming found" })
        );
    });
  }
);

module.exports = router;
