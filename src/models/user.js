// const bcrypt = require('bc');
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name : String , 
    email : String , 
    password : String
})

userSchema.method.bcryptPassword = (password)=>{

}
module.exports = mongoose.model('User' , userSchema , 'User')