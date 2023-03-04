const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

userSchema.methods.bcryptPassword = (password) => {
    return bcrypt.hashSync(password, 8);
}

userSchema.methods.comparePassword = (password) => {
    return bcrypt.compareSync(password, this.password); // true
}

module.exports = mongoose.model('User', userSchema, 'User')