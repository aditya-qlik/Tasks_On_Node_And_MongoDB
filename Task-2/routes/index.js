const express = require('express');
const mongoose = require('mongoose');
const route = express.Router();
const userController = require('../controller/userController')
const {catchErrors} = require('../handlers/errorHandlers');

route.get('/', (req, res) => {
    console.log('Using get..');
    res.render('index');
});
route.get('/admin', userController.addUser);
route.post('/admin', catchErrors(userController.createUser));

route.get('/user', userController.showUsers);
route.post('/user', catchErrors(userController.removeUser));


module.exports = route;