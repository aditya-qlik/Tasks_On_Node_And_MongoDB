const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Please Enter Your Name.'
    },
    age: {
        type: Number,
        trim: true,
        min: [0, "Age can't be -ve "],
        max: 150,
        required: 'Please Enter Your Age.'
    },
    city: {
        type: String,
        trim: true,
    },
    state: {
        type: String,
        trim: true,
    }

});

module.exports = mongoose.model('Users', userSchema);