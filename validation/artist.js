const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateArtistInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.bio = !isEmpty(data.bio) ? data.bio : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  if (Validator.isEmpty(data.bio)) {
    errors.bio = "Bio field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
