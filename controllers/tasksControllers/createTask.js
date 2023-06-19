const { middlewareWrapper } = require('../../utils/middlewareWrapper');
const { createTaskService } = require('../../services');

const createTask = middlewareWrapper(async (req, res) => {
  const { id: userId } = req.user;

  const task = await createTaskService(userId, req.body);

  res.status(201).json(task);
});

module.exports = createTask;
