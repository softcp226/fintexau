const Joi = require("joi");

const validate_user_setpin = (req) => {
  const Schema = Joi.object({
    pin: Joi.number().required(),
  }).options({ stripUnknown: true });
  const result = Schema.validate({
    pin: req.pin,
  });
  if (result.error) return result.error.message;
  return true;
};
module.exports = validate_user_setpin;
