const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Post model
const Resident = require("../../models/Resident");
// Profile model

// Validation
const validateResidentInput = require("../../validation/resident");

// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Residents Works" }));

// @route   GET api/posts
// @desc    Get posts
// @access  Public
router.get("/", (req, res) => {
  Resident.find()

    .then(residents => res.json(residents))
    .catch(err =>
      res.status(404).json({ noresidentsfound: "No residents found" })
    );
});

// @route   GET api/posts/:id
// @desc    Get post by id
// @access  Public
router.get("/:id", (req, res) => {
  Resident.findById(req.params.id)
    .then(resident => res.json(resident))
    .catch(err =>
      res
        .status(404)
        .json({ noresidentfound: "No resident found with that ID" })
    );
});

// @route   POST api/posts
// @desc    Create post
// @access  Private
router.post(
  "/",
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateResidentInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const newResident = new Resident({
      name: req.body.name,
      bio: req.body.bio,
      image: req.body.image,
      mix: req.body.mix
    });

    newResident.save().then(resident => res.json(resident));
  }
);

// @route   DELETE api/posts/:id
// @desc    Delete post
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Resident.findOne({ resident: req.user.id }).then(profile => {
      Resident.findById(req.params.id)
        .then(resident => {
          // Check for post owner
          if (resident.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: "User not authorized" });
          }

          // Delete
          resident.remove().then(() => res.json({ success: true }));
        })
        .catch(err =>
          res.status(404).json({ residentnotfound: "No resident found" })
        );
    });
  }
);

module.exports = router;
