const { Router } = require('express');
const authRouter = require('./auth');
const tasksRouter = require('./tasks');

const router = Router();

router.use('/auth', authRouter);

router.use('/tasks', tasksRouter);

module.exports = { router };
