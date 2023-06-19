const { Task } = require('../../models/Task');

const createTaskService = (userId, data) => {
  return Task.create({ owner: userId, ...data });
};

module.exports = createTaskService;
