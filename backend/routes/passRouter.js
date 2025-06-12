const express = require('express');


const { getPassenger, getPassengerByEmail, postPassenger, getLatestPassengerRequestByEmail , updatePassengerStatus } = require('../controllers/passController');
// const { verifyPassenger } = require('../middleware/passValidation');
// const { passengerValidation } = require('../middleware/passValidation');

const router = express.Router();

//get route
router.get('/', getPassenger);

//get route by email
router.get('/email/:email', getPassengerByEmail);

// post route
router.post('/post', postPassenger);

router.get('/latest', getLatestPassengerRequestByEmail);

router.put('/update/:id', updatePassengerStatus);
module.exports = router;