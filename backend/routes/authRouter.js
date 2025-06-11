const { sign } = require('jsonwebtoken');
const { signup, login } = require('../controllers/authController');

const router = require('express').Router();
const { signupValidation , loginValidation} = require('../middleware/authValidation');

router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);

module.exports = router;
