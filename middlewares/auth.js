const jwt = require('jsonwebtoken');

const { HttpError } = require('../utils/HttpError');
const { User } = require('../models/User');
const { assignTokens } = require('../utils/assignTokens');

const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = process.env;

const auth = async (req, res, next) => {
  const { authorization = '' } = req.headers;
  const [bearer, token] = authorization.split(' ');

  if (bearer !== 'Bearer' || !token) {
    return next(new HttpError(401, 'Not authorized'));
  }

  let fetchedUser;
  try {
    const decoded = jwt.decode(token);
    fetchedUser = await User.findById(decoded.id);

    if (!fetchedUser || !fetchedUser.refresh_token) {
      return next(new HttpError(401, 'Not authorized'));
    }

    jwt.verify(token, ACCESS_TOKEN_SECRET);
    req.user = fetchedUser;

    next();
  } catch (error) {
    if (error.name !== 'TokenExpiredError') {
      return next(new HttpError(401, error.message || 'Not authorized'));
    }

    try {
      jwt.verify(fetchedUser.refresh_token, REFRESH_TOKEN_SECRET);

      const { accessToken, refreshToken } = assignTokens(fetchedUser);
      await User.findByIdAndUpdate(fetchedUser._id, { refreshToken });

      res.status(200).json({
        accessToken,
      });
    } catch (error) {
      next(new HttpError(401, 'Refresh token is expired'));
    }
  }
};

module.exports = auth;
