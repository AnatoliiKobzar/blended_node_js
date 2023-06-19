const { middlewareWrapper } = require('../../utils/middlewareWrapper');
const { getTaskService } = require('../../services');

const getTask = middlewareWrapper(async (req, res) => {
  const { taskId } = req.params;
  const { id: userId } = req.user;

  const task = await getTaskService(userId, taskId);

  res.status(200).json(task);
});

module.exports = getTask;
