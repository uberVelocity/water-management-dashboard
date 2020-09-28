const mongoose = require('mongoose');
const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');

// User schema
const userSchema = new mongoose.Schema({
    email : {type : String, unique : true, required : [true, 'Email is required']},
    username : {type : String, unique : true, required : [true, 'Username is required']},
    password : {type : String, required : [true, 'Password is required']},
    level : {type : Number, default : 1}
});

// Method to generate authToken
userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id: this._id, level: this.level}, config.get('myprivatekey'));
    return token;
};

const User = mongoose.model('User', userSchema);

// Function to validate user
function validateUser(user) {
    const schema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
        email: Joi.string().min(5).max(100).required().email(),
        password: Joi.string().min(3).max(40).required()
    });

    return schema.validate(user);
}

exports.User = User;
exports.validateUser = validateUser;