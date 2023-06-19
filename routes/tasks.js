const { Router } = require('express');
const {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require('../controllers');
const { validateBody, auth } = require('../middlewares');
const {
  createTaskValidationSchema,
  updateTaskValidationSchema,
} = require('../utils/validation/taskValidation');

const router = Router();

router.use(auth);

router
  .route('/')
  .get(getTasks)
  .post(validateBody(createTaskValidationSchema), createTask);

router
  .route('/:taskId')
  .get(getTask)
  .patch(validateBody(updateTaskValidationSchema), updateTask)
  .delete(deleteTask);

module.exports = router;
