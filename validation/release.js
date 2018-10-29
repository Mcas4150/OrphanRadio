const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateReleaseInput(data) {
  let errors = {};

  data.artist = !isEmpty(data.artist) ? data.artist : "";
  data.title = !isEmpty(data.title) ? data.title : "";

  if (Validator.isEmpty(data.artist)) {
    errors.artist = "Artist field is required";
  }
  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
