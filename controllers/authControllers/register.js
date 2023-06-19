const { middlewareWrapper } = require('../../utils/middlewareWrapper');
const { createUserService } = require('../../services');

const register = middlewareWrapper(async (req, res) => {
  const user = await createUserService(req.body);

  res.status(201).json({ user });
});

module.exports = register;
