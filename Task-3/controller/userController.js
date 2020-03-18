const mongoose = require('mongoose');
const { User, validate } = require('../models/Users');


exports.addUser = (req, res) => {
    res.render('addUser', {title: 'Add Users'});
};

exports.createUser = async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).send('That user already exisits!');
    } else {
        // Insert the new user if they do not exist yet
        const user = await (new User(req.body)).save();
        console.log(`Successfully added ${user.name} details in DB`);
        res.redirect('/user');
    }
    console.log("inside createUser");
    
};

exports.showUsers = async (req,res) => {
    const userArray = await User.find();
    console.log(userArray);
    res.render('userTable',{ userArray }); 
};

exports.editUsers = async (req,res) => {
    // console.log(req.query.email);
    const user = await User.findOne({email: req.query.email});
    console.log(user);
    res.render('editUser', { title: `Edit ${user.name}`, user } );
}

exports.updateUser = async (req, res) => {
    const user = await User.findOneAndUpdate({ email: req.query.email }, req.body, {
        new: true, // return the new store instead of the old one
        runValidators: true
      }).exec();
      console.log(`${user.name} is updated`);
    res.redirect('/user');
}

exports.deleteUser = async (req, res) => {  
    await User.findOneAndDelete({ email: req.query.email }, function(err){
        if(err) console.log(err);
        res.redirect('/user');
    })
}