const {Schema, model} = require ('mongoose');
const bcrypt = require('bcrypt');

const userShecma = new Schema({
    username:{type: String, require: true, unique: true},
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true},
    role:{
        type:String, default: 'user'
    },
    profileImage: String,
    bio:{
        type: String, maxlength: 200
    },
    profession:{
        type: Date,
        default: Date.now
    }
})

//haspassword

userShecma.pre('save', async function (next) {
    const user = this;
    if(!user.isModified('password')) 
        return next();
    const haspassword = await bcrypt.hash(user.password,10);
    user.password = haspassword;
    next();
})


const User = new model('User', userShecma);
module.exports = User;