const login = require('./authControllers/login');
const logout = require('./authControllers/logout');
const register = require('./authControllers/register');

const getTasks = require('./tasksControllers/getTasks');
const getTask = require('./tasksControllers/getTask');
const createTask = require('./tasksControllers/createTask');
const deleteTask = require('./tasksControllers/deleteTask');
const updateTask = require('./tasksControllers/updateTask');

module.exports = {
  login,
  logout,
  register,
  getTask,
  getTasks,
  createTask,
  deleteTask,
  updateTask,
};
