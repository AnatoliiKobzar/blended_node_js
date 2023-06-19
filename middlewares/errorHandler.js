const errorHandler = (err, _, res) => {
  res.status(err.statusCode || 500).json({
    message: err.message || 'Internal server error',
  });
};

module.exports = errorHandler;
