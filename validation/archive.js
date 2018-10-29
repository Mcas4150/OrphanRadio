const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateArchiveInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.mix = !isEmpty(data.mix) ? data.mix : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  if (Validator.isEmpty(data.mix)) {
    errors.mix = "mix field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
