const Passenger = require('../models/passModel');

const getPassenger = async (req, res) => {
    try {
        const passengers = await Passenger.find({});
        res.status(200).json(passengers);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
        console.error('Error fetching passengers:', error);
    }
}

const getPassengerByEmail = async (req, res) => {
    try {
        const { email } = req.params;
        const passenger = await Passenger.findOne({ email });
        if (!passenger) {
            return res.status(404).json({
                success: false,
                message: 'Passenger not found'
            });
        }
        res.status(200).json(passenger);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
        console.error('Error fetching passenger:', error);
    }
}

const postPassenger = async (req, res) => {
try {
        const passenger = await Passenger.create(req.body);
        res.status(200).json(passenger);    
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
        console.error('Passenger creation error:', error);
    }
}


module.exports = { getPassenger , getPassengerByEmail, postPassenger };