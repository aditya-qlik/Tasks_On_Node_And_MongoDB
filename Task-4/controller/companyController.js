const mongoose = require('mongoose');
const {User} = require('../models/Users');
const Company = require('../models/Company');

exports.addCompany = async ( req, res ) => {
    // console.log(req.body);
    const user = await User.findOne({ email: req.body.emailId });
    // console.log(user);
    const emailExist = await Company.findOne({ emailId: req.body.emailId });
    const companyExist = await Company.findOne({ companyName: req.body.companyName });
    if (!companyExist){
        if ( !emailExist ) {
            if(user){
                const company = await (new Company(req.body)).save();
                console.log(` ${company.companyName} is added `);
                res.redirect('/company');
            } else {
                res.send('No User With This Email Present');
                console.log('No User With This Email Present');
            }
        } else {
            res.send('Email already in use');
            console.log('Email Already In Use');
        }
    } else {
        res.send('Company already Exists');
        console.log('company Already Exists');
    }
    
};

exports.showCompanies = async  ( req, res ) => {
    const companies = await Company.find();
    res.send(companies);
};

exports.showSingleCompany = async ( req, res ) => {
    // console.log( req.params.companyName);
    const requestedCompany = await Company.findOne({companyName: req.params.companyName});
    if(requestedCompany){   
        console.log(requestedCompany);
        res.send(requestedCompany);
    } else {
        console.log(`${req.params.companyName} not present`);
        res.json(`${req.params.companyName} not present`);
    }
};

exports.updateCompany = async ( req, res ) => {
    const updatedCompany = await Company.findOneAndUpdate({companyName: req.params.companyName}, {companyName: req.body.companyName}, { new: true});
    console.log(updatedCompany);
    if(updatedCompany){   
        console.log(updatedCompany);
        res.send(updatedCompany);
    } else {
        console.log(`${req.params.companyName} not present`);
        res.json(`${req.params.companyName} not present`);
    }
};

exports.deleteCompanyAndUser = async ( req, res ) => {
    const company = await Company.findOne({companyName: req.params.companyName});
    if(!company) {
        res.send('No Such Company Exists');
        console.log('No Such Company Exists');
    } else {
        Company.findOneAndDelete({ companyName: req.params.companyName }, function(err){
            if(err) console.log(err);
            console.log('Company deleted');
        }).exec();

        User.findOneAndDelete({ email:company.emailId }, function(err){
            if(err) console.log(err);
            else{
                console.log('User deleted');
                res.redirect('/company');
            }
        }).exec();
    }
};
