const mongoose = require('mongoose');
const Users = mongoose.model('Users');


exports.addUser = (req, res) => {
    res.render('addUser', {title: 'Add Users'});
};

exports.createUser = async (req, res) => {
    console.log("inside createUser");
    const user = await (new Users(req.body)).save();
    console.log(`Successfully added ${user.name} details in DB`);
    res.redirect('/user');
};

exports.showUsers = async (req,res) => {
    const userArray = await Users.find();
    console.log(userArray);
    res.render('userTable',{ userArray }); 
};

exports.editUsers = async (req,res) => {
    // console.log(req.query.email);
    const user = await Users.findOne({email: req.query.email});
    // console.log(user);
    res.render('editUser', { title: `Edit ${user.name}`, user } );
}

exports.removeUser = (req, res) => {  
    res.render('userTable',{  });
}