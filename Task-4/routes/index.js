const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const userController = require('../controller/userController');
const companyController = require('../controller/companyController');
const {catchErrors} = require('../handlers/errorHandlers');

router.get('/', (req, res) => {
    console.log('Using get..');
    res.render('index');
});
router.get('/user', userController.showUsers);
router.get('/user/add', catchErrors(userController.loadUserForm));
router.post('/user', catchErrors(userController.createUser));
router.put('/user', catchErrors(userController.updateUser));
router.post('/user/edit', catchErrors(userController.editUsers));
router.delete('/user', catchErrors(userController.deleteUser));
router.post('/company', catchErrors(companyController.addCompany));
router.get('/company', catchErrors(companyController.showCompanies));
router.get('/company/:companyName', catchErrors(companyController.showSingleCompany));
router.put('/company/:companyName', catchErrors(companyController.updateCompany));
router.delete('/company/:companyName', catchErrors(companyController.deleteCompanyAndUser));

// router.post('/user', catchErrors(userController.removeUser));


module.exports = router;