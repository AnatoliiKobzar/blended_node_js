const getTasksService = require('./tasksServices/getTasksService');
const getTaskService = require('./tasksServices/getTaskService');
const createTaskService = require('./tasksServices/createTaskService');
const updateTaskService = require('./tasksServices/updateTaskService');
const deleteTaskService = require('./tasksServices/deleteTaskService');

const createUserService = require('./authServices/signupService');

const assignTokens = require('../utils/assignTokens');
const loginService = require('./authServices/loginService');
const logoutService = require('./authServices/logoutService');

module.exports = {
  getTaskService,
  getTasksService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
  createUserService,
  assignTokens,
  loginService,
  logoutService,
};
