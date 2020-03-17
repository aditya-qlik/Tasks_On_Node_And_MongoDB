const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const userController = require('../controller/userController')
const {catchErrors} = require('../handlers/errorHandlers');

router.get('/', (req, res) => {
    console.log('Using get..');
    res.render('index');
});
router.get('/user', userController.showUsers);
router.post('/user',  userController.addUser,catchErrors(userController.createUser));
router.put('/user', catchErrors(userController.editUsers));
// router.post('/user', catchErrors(userController.removeUser));


module.exports = router;