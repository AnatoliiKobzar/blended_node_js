const { User } = require('../../models/User');

const logoutService = (id) => {
  return User.findByIdAndUpdate(id, { refresh_token: null });
};

module.exports = logoutService;
