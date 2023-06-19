const { User } = require('../../models/User');
const createError = require('http-errors');

const signupService = async (data) => {
  const userExist = await User.findOne({ email: data.email });

  if (userExist) {
    throw createError(409, 'Email is already used');
  }

  const user = await User.create(data);
  user.password = undefined;

  return user;
};

module.exports = signupService;
