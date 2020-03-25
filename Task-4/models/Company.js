const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const validator = require('validator');

const Company = new mongoose.Schema({
    companyName: {
        type: String,
        unique: true,
        trim: true,
        required: 'Please Enter Company Name.'
    },
    emailId: {
        type: String,
        lowercase: true,
        trim: true,
        validate: [validator.isEmail, 'Invalid Email Address Format'],
        required: 'Please Enter an Email Address'
    }

});

module.exports = mongoose.model('Company', Company);