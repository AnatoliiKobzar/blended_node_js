const { middlewareWrapper } = require('../../utils/middlewareWrapper');
const { deleteTaskService } = require('../../services');

const deleteTask = middlewareWrapper(async (req, res) => {
  const { taskId } = req.params;
  const { id: userId } = req.user;

  const result = await deleteTaskService(userId, taskId);

  res.status(200).json(result);
});

module.exports = deleteTask;
