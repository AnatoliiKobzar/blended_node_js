const { Task } = require('../../models/Task');

const getTasksService = (userId, page, limit, completed) => {
  const skip = (page - 1) * limit;
  const filter = { owner: userId };

  if (completed === 'true') {
    filter.completed = true;
  }
  if (completed === 'false') {
    filter.completed = false;
  }

  return Task.find(filter).skip(skip).limit(limit);
};

module.exports = getTasksService;
