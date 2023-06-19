const { Task } = require('../../models/Task');
const createError = require('http-errors');

const getTaskService = async (userId, taskId) => {
  const result = await Task.findOne({ _id: taskId, owner: userId });

  if (!result) {
    throw createError(404);
  }

  return result;
};

module.exports = getTaskService;
