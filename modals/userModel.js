const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        require: true
    },
    email: {
        type: String,
        required: [true, "Email is a required"],
        trim: true,
        lowercase: true,
        unique: true,
    },  
    password: {
        type: String,
        require: [true, "Password is required"],
        trim: true
    } 
})

const user = new mongoose.model("users", userSchema);

module.exports = user;
