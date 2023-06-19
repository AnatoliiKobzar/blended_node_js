const { User } = require('../../models/User');
const createError = require('http-errors');
const { assignTokens } = require('../index');

const loginService = async ({ email, password }) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw createError(401, 'Email or password is incorrect');
  }

  const isPasswordCorrect = await user.isPasswordCorrect(password);

  if (!isPasswordCorrect) {
    throw createError(401, 'Email or password is incorrect');
  }

  const { accessToken, refreshToken } = assignTokens(user);

  await User.findByIdAndUpdate(user._id, { refresh_token: refreshToken });

  return { user, accessToken };
};

module.exports = loginService;
