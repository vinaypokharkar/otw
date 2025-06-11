const Joi = require('joi');

    const signupValidation = (req, res, next) => {
        const schema = Joi.object({
            firstName: Joi.string().min(2).max(30).required(),
            lastName: Joi.string().min(2).max(30).required(),
            email: Joi.string().email().required(),
            phone: Joi.string().pattern(/^\+?\d{10,15}$/).required(),
            password: Joi.string().min(6).required(),
            role: Joi.string().valid('passenger', 'driver').required()
        });

        const { error } = schema.validate(req.body);

        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        next();
    }

    const loginValidation = (req, res, next) => {
        const schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required()
        });

        const { error } = schema.validate(req.body);

        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        next();
    }

    module.exports = {
        signupValidation,
        loginValidation
    }