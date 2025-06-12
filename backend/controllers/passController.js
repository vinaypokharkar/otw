const Passenger = require('../models/passModel');

const getPassenger = async (req, res) => {
    try {
        const passengers = await Passenger.find({}).sort({ createdAt: -1 });
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

const getLatestPassengerRequestByEmail = async (req, res) => {
    try {
        const { email } = req.query; // e.g., /api/passenger/latest?email=test@gmail.com

        const ride = await Passenger.findOne({ email }).sort({ createdAt: -1 });

        if (!ride) {
            return res.status(404).json({ success: false, message: 'No ride found' });
        }

        res.status(200).json(ride);
    } catch (error) {
        console.error('Error fetching ride:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

const updatePassengerStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedRide = await Passenger.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    res.status(200).json(updatedRide);
  } catch (error) {
    console.error('Error updating trip:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// controller/passengerController.js
const getRequestedPassengers = async (req, res) => {
  try {
    const requestedPassengers = await Passenger.find({ status: "requested" })
      .sort({ createdAt: -1 }); // Sort by latest

    res.status(200).json(requestedPassengers);
  } catch (error) {
    console.error("Error fetching requested passengers:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = { getRequestedPassengers };



module.exports = { getPassenger , getPassengerByEmail, postPassenger, getLatestPassengerRequestByEmail, updatePassengerStatus , getRequestedPassengers };