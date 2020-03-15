const userArray = require('./userController/userArray');

function addUser() {
    window.location.href = '/admin';
}

function remove() {
    userArray.pop();
    window.location.href = '/user';
    console.log(userArray);
}