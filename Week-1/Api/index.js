const express = require('express');
const mongoose = require('mongoose');
const route = express.Router();

// const envVariables_keys = Object.keys(envVariables);
// const envVariables_values = Object.values(envVariables);
route.get('/', (req, res) => {
    console.log('Using get..');
    res.render('hello');
    // console.log(envVariables_keys);
    // console.log(envVariables_values);
});
module.exports = route;