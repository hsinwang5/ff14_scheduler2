const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateGroupLogin(data) {
  let errors = {};

  data.username = !isEmpty(data.username) ? data.username : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (
    !Validator.isLength(data.password, { min: 6, max: 20 }) &&
    data.password !== ""
  ) {
    errors.password = "Password should be between 6 and 20 characters. Thanks!";
  }

  if (!Validator.isLength(data.username, { min: 3 })) {
    errors.username = "username field must be at least 3 characters long";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
