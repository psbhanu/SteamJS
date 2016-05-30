/**
* Package @ Steam JS - User Model	
* Author  @ psbhanu
*/

var mongoose = require('mongoose');
var User = new mongoose.Schema({
    name: String,
    password: String,
    email: String
});
 
var UserModel = mongoose.model('User', User);

module.exports = UserModel;