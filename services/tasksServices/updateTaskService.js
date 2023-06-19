const { Task } = require('../../models/Task');

const updateTaskService = (userId, taskId, data) => {
  return Task.findOneAndUpdate({ _id: taskId, owner: userId }, data, {
    new: true,
  });
};

module.exports = updateTaskService;
