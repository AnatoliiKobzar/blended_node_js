const { middlewareWrapper } = require('../../utils/middlewareWrapper');
const { logoutService } = require('../../services');

const logout = middlewareWrapper(async (req, res) => {
  const { id } = req.user;

  await logoutService(id);

  res.status(200).json({ message: 'Successful logout' });
});

module.exports = logout;
