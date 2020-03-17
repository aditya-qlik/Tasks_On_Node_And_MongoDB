const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const validator = require('validator');
const mongodbErrorHandler = require('mongoose-mongodb-errors');
const Joi = require('joi');

const User =mongoose.model('User', new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Please Enter Your Name.'
    },
    age: {
        type: Number,
        trim: true,
        min: [0, "Age can't be -ve "],
        max: 110,
        required: 'Please Enter Your Age.'
    },
    city: {
        type: String,
        trim: true,
    },
    state: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        validate: [validator.isEmail, 'Invalid Email Address'],
        required: 'Please Enter an Email Address'
    }

}));

// userSchema.plugin(mongodbErrorhandler);

function validateUser(user) {
    const schema = {
        email: Joi.string().required().email()
    };
    return Joi.validate(user, schema);
}

exports.validate = validateUser;

exports.User = User;