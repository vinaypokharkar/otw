const express = require('express');


const { getPassenger, getPassengerByEmail, postPassenger } = require('../controllers/passController');
// const { verifyPassenger } = require('../middleware/passValidation');
// const { passengerValidation } = require('../middleware/passValidation');

const router = express.Router();

//get route
router.get('/', getPassenger);

//get route by email
router.get('/email/:email', getPassengerByEmail);

// post route
router.post('/post', postPassenger);


module.exports = router;