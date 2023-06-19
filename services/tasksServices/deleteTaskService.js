const createError = require('http-errors');
const { Task } = require('../../models/Task');

const deleteTaskService = async (userId, taskId) => {
  const result = await Task.findOneAndDelete({ _id: taskId, owner: userId });

  if (!result) {
    throw createError(404);
  }

  return { taskId };
};

module.exports = deleteTaskService;
