const bcrypt = require('bcrypt');
const UserModel = require('../models/users');
const { sign } = require('jsonwebtoken');

const signup = async (req, res) => {
    try {
        const { firstName, lastName, email, phone, password, role } = req.body;

    // Check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: 'User already exists, please log in'
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new UserModel({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
      role
    });

    await newUser.save();

    return res.status(201).json({
      success: true,
      message: 'Signup successful',
      userId: newUser._id
    });

    } catch (err) {
         console.error('Signup error:', err);
    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await UserModel.findOne({ email }); 
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password'
            });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password'
            });
        }

        // Generate JWT token
        const token = sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '4h' });

        return res.status(200).json({
            success: true,
            message: 'Login successful',
            token,
            user: {
                firstName: user.firstName,
                email: user.email,
                phone: user.phone
                }
        });

    } catch (err) {
        console.error('Login error:', err);
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}

module.exports = {
    signup,
    login
}