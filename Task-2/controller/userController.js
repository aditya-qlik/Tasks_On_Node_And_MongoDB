const mongoose = require('mongoose');
const Users = mongoose.model('Users');
const userArray=[];


exports.addUser = (req, res) => {
    res.render('addUser', {title: 'Add Users'});
};

exports.createUser = async (req, res) => {
    console.log("inside createUser");
    const user = await (new Users(req.body)).save();
    // console.log(req.body);
    console.log(`Successfully added ${user.name} details in DB`);
    userArray.push(user);
    console.log(userArray);
    res.redirect('/user');
};

exports.showUsers = (req,res) => {
    console.log(userArray);
    res.render('userTable',{ userArray });
};

exports.userArray;