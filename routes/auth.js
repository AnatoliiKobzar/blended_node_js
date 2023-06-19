const { Router } = require('express');
const { register, login, logout } = require('../controllers');
const { validateBody, auth } = require('../middlewares');
const {
  createUserValidationSchema,
  loginValidationSchema,
} = require('../utils/validation/authValidation');

const router = Router();

router.post('/register', validateBody(createUserValidationSchema), register);

router.post('/login', validateBody(loginValidationSchema), login);

router.post('/logout', auth, logout);

module.exports = router;
