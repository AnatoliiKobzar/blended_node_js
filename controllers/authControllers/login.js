const { middlewareWrapper } = require('../../utils/middlewareWrapper');
const { loginService } = require('../../services');

const login = middlewareWrapper(async (req, res) => {
  const { user, accessToken } = await loginService(req.body);

  res.status(200).json({ user, token: accessToken });
});

module.exports = login;
