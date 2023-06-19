const { middlewareWrapper } = require('../../utils/middlewareWrapper');
const { getTasksService } = require('../../services');

const getTasks = middlewareWrapper(async (req, res) => {
  const { page = 1, limit = 10, completed } = req.query;
  const { id: userId } = req.user;

  const tasks = await getTasksService(userId, page, limit, completed);

  res.status(200).json({ tasks });
});

module.exports = getTasks;
