const { middlewareWrapper } = require('../../utils/middlewareWrapper');
const { updateTaskService } = require('../../services');
const createError = require('http-errors');

const updateTask = middlewareWrapper(async (req, res) => {
  const { taskId } = req.params;
  const { id: userId } = req.user;

  const task = await updateTaskService(userId, taskId, req.body);

  if (!task) {
    throw createError(404);
  }

  res.status(200).json(task);
});

module.exports = updateTask;
