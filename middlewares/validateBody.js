const createError = require('http-errors');

const validateBody = (schema) => {
  return (req, res, next) => {
    const result = schema.validate(req.body);

    if (result.error) {
      return next(createError(422, result.error));
    }

    next();
  };
};

module.exports = validateBody;
